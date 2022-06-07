import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import FrontPageMap from '../FrontPageMap'

type FeatureItem = {
  title: string
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>
  Component?: React.ReactElement
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Pure react',
    Svg: require('@site/static/img/react.svg').default,
    description: (
      <>
        Many map packages are wrappers around JavaScript libraries. This is a
        pure React implementation, which means integration with the React eco
        system is a breeze.
      </>
    ),
  },
  {
    title: 'Zoomoutable',
    Component: <FrontPageMap />,
    description: (
      <>
        When zoomed out the map provides a wrap-around view, repeating any
        markers.
      </>
    ),
  },
  {
    title: 'Interaction with hooks',
    Svg: require('@site/static/img/react-hook.svg').default,
    description: (
      <>
        Map interactions are controlled by hooks. This allows customizations
        with spring or a hook library of your choice.
      </>
    ),
  },
]

function Feature({ title, Svg, Component, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Component && Component}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
