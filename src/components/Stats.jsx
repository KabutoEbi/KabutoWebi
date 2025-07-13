import React, { useState, useEffect } from "react";

const Stats = () => {
    const [githubStats, setGithubStats] = useState({
        publicRepos: 0,
        totalCommits: 0,
        loading: true
    });

    const [qiitaStats, setQiitaStats] = useState({
        itemsCount: 0,
        likesCount: 0,
        loading: true
    });

    const fetchGitHubStats = async () => {
        try {
            const userResponse = await fetch('https://api.github.com/users/KabutoEbi');
            const userData = await userResponse.json();

            const reposResponse = await fetch('https://api.github.com/users/KabutoEbi/repos');
            const reposData = await reposResponse.json();
            
            let totalCommits = 0;
            const currentYear = new Date().getFullYear();
            
            for (const repo of reposData.slice(0, 10)) {
                try {
                    const commitsResponse = await fetch(
                        `https://api.github.com/repos/${repo.full_name}/commits?since=${currentYear}-01-01T00:00:00Z&per_page=100`
                    );
                    const commitsData = await commitsResponse.json();
                    if (Array.isArray(commitsData)) {
                        totalCommits += commitsData.length;
                    }
                } catch (error) {
                    console.log(`${repo.name}のcommit取得エラー:`, error);
                }
            }

            setGithubStats({
                publicRepos: userData.public_repos || 0,
                totalCommits: totalCommits,
                loading: false
            });
        } catch (error) {
            console.error('GitHub API エラー:', error);
            setGithubStats(prev => ({ ...prev, loading: false }));
        }
    };

    const fetchQiitaStats = async () => {
        try {
            const userResponse = await fetch('https://qiita.com/api/v2/users/KabutoEbi');
            const userData = await userResponse.json();

            const itemsResponse = await fetch('https://qiita.com/api/v2/users/KabutoEbi/items');
            const itemsData = await itemsResponse.json();
            
            const totalLikes = itemsData.reduce((sum, item) => sum + item.likes_count, 0);

            setQiitaStats({
                itemsCount: userData.items_count || 0,
                likesCount: totalLikes,
                loading: false
            });
        } catch (error) {
            console.error('Qiita API エラー:', error);
            setQiitaStats(prev => ({ ...prev, loading: false }));
        }
    };

    useEffect(() => {
        fetchGitHubStats();
        fetchQiitaStats();
    }, []);

    const StatCard = ({ title, value, icon, color, loading }) => (
        <div className={`bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-1`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
                    <p className={`text-3xl font-bold ${color}`}>
                        {loading ? (
                            <span className="animate-pulse bg-gray-200 rounded w-16 h-8 block"></span>
                        ) : (
                            value.toLocaleString()
                        )}
                    </p>
                </div>
                <div className={`w-12 h-12 ${color.replace('text-', 'bg-').replace('-600', '-100')} rounded-full flex items-center justify-center text-2xl`}>
                    {icon}
                </div>
            </div>
        </div>
    );

    return (
        <section className="mb-16 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        活動統計
                    </h2>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <img src="/github-mark.png" alt="GitHub" className="w-8 h-8 mr-3" />
                        GitHub
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StatCard
                            title="パブリックリポジトリ"
                            value={githubStats.publicRepos}
                            icon="📁"
                            color="text-blue-600"
                            loading={githubStats.loading}
                        />
                        <StatCard
                            title="今年のコミット数"
                            value={githubStats.totalCommits}
                            icon="💻"
                            color="text-green-600"
                            loading={githubStats.loading}
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <img src="/qiita-icon.png" alt="Qiita" className="w-8 h-8 mr-3" />
                        Qiita
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StatCard
                            title="記事数"
                            value={qiitaStats.itemsCount}
                            icon="📄"
                            color="text-green-600"
                            loading={qiitaStats.loading}
                        />
                        <StatCard
                            title="総いいね数"
                            value={qiitaStats.likesCount}
                            icon="❤️"
                            color="text-red-600"
                            loading={qiitaStats.loading}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
