import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Pink Hooch Wiki"
      description="Commands, guides, rules, and help for Pink Hooch"
    >
      <main className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Pink Hooch Wiki</h1>
          <p className="hero__subtitle">
            Commands, guides, rules, and help for the Pink Hooch Minecraft network.
          </p>
          <div className="server-ip-box">
            <strong>Server IP:</strong> mc.pink-hooch.net
          </div>
          <div>
            <Link className="button button--secondary button--lg" to="/docs/getting-started">
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <section className="container margin-vert--lg">
      <div className="row">
        <div className="col col--4">
          <div className="card padding--lg">
            <h2>Survival SMP</h2>
            <p>Learn claims, economy, homes, shops, guilds, and useful survival commands.</p>
            <Link className="button button--primary" to="/docs/commands/survival/">
              Survival Commands
            </Link>
          </div>
        </div>

        <div className="col col--4">
          <div className="card padding--lg">
            <h2>OneBlock</h2>
            <p>Learn island commands, progression, co-op features, and resets.</p>
            <Link className="button button--primary" to="/docs/commands/oneblock/">
              OneBlock Guide
            </Link>
          </div>
        </div>

        <div className="col col--4">
          <div className="card padding--lg">
            <h2>Creative Plots</h2>
            <p>Learn how to claim plots, trust friends, and manage your builds.</p>
            <Link className="button button--primary" to="/docs/commands/creative/">
              Creative Commands
            </Link>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}