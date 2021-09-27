import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Anonimiza',
    Svg: require('../../static/img/icono-02.svg').default,
    description: (
      <>
        Aplicando técnicas de Inteligencia Artificial, facilita la
        anonimización de los datos personales contenidos en documentos.
      </>
    ),
  },
  {
    title: 'Publica',
    Svg: require('../../static/img/icono-01.svg').default,
    description: (
      <>
      Los documentos anonimizados pueden ser descargados o publicados desde
      la aplicación en distintas plataformas y redes.
      </>
    ),
  },
  {
    title: 'Obtiene',
    Svg: require('../../static/img/icono-03.svg').default,
    description: (
      <>
        Extremos de cada documento datos demográficos de manera transparente para
        crear valor y generar insumos con potencial impacto en decisiones
        futuras.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
  );
}
