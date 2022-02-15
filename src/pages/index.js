import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={styles.header}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--4 ')}>
              <div className={styles.headerRow}>
                <h1 className={styles.headerTitle}>{"一站式融合计算平台"}</h1>
                <p className={styles.headerText}>{"针对AI、HPC等场景的计算与资源管理的需求来设计,提供了对数据、算法、镜像、模型与算力等资源的管理与使用功能"}</p>
                <div className={styles.headerButton}>
                  <Link
                    to="/docs/introduction/intro">
                    <div className={styles.headerButtonText}>
                      查看详情
                      <img className={styles.detailImg} src="img/arrow.svg" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={clsx('col col--8')}>
              <div className={styles.headerRow}>
                <img className={styles.headerImg} src="img/pumpkin-doc-pic.svg" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <h2 className={styles.middleTitle}>针对研发及教育的开源计算平台</h2>
          <div className="row">
            <div className={clsx(`col`, 'text--center')}>
              <div  className={styles.card}>
                <div className="card__image">
                  <img className={styles.mainImg} src="img/pumpkin-doc-sup-01.svg" />
                </div>
                <div className="card__body">
                  <h2 className={styles.mainTitle}>方便管理</h2>
                  <p className={styles.mainText}>
                    为平台管理者提供一站式的资源管理平台，用过资源配置、监控、权限管控等可视化工具，大大降低平台管理者的管理成本
                  </p>
                </div>
              </div>
            </div>
            <div className={clsx(`col`, 'text--center')}>
              <div  className={styles.card}>
                <div className="card__image">
                  <img className={styles.mainImg} src="img/pumpkin-doc-sup-02.svg" />
                </div>
                <div className="card__body">
                  <h2 className={styles.mainTitle}>易于部署</h2>
                  <p className={styles.mainText}>
                    Pumpkin 支持 helm 方式的快速部署，简化复杂的部署流程
                  </p>
                </div>
              </div>
            </div>

            <div className={clsx(`col`, 'text--center')}>
              <div  className={styles.card}>
                <div className="card__image">
                  <img className={styles.mainImg} src="img/pumpkin-doc-sup-03.svg" />
                </div>
                <div className="card__body">
                  <h2 className={styles.mainTitle}>性能优越</h2>
                  <p className={styles.mainText}>
                    提供高性能的分布式计算体验，通过多方面优化来保证各个环境的流畅运行，同时通过资源调度优化与分布式计算优化，进一步提高模型训练效率
                  </p>
                </div>
              </div>

            </div>
            <div className={clsx(`col`, 'text--center')}>
              <div  className={styles.card}>
                <div className="card__image">
                  <img className={styles.mainImg} src="img/pumpkin-doc-sup-04.svg" />
                </div>
                <div className="card__body">
                  <h2 className={styles.mainTitle}>兼容性好</h2>
                  <p className={styles.mainText}>
                    平台支持异构硬件，如 GPU、NPU、FPGA 等，满足各种不同的硬件集群部署需求；同时也支持多种深度学习框架，并可以通过自定义镜像方式支持新增框架
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
