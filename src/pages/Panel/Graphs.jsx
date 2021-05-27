import React from 'react';
import { Graph } from './Graph';

const Graphs = ({ data }) => {
  return (
    <section className='graphs'>
      {data && data.length ? 
        data.map((g) => <Graph key={g} img={g} /> ) : null }
    </section>
  );
};

export { Graphs };