import React, { useEffect, useState } from 'react';
import { Network } from 'react-vis-network';

const glossary = [
  { id: 1, term: "Responsive Design", related_terms: [2, 4, 7] },
  { id: 2, term: "Media Queries", related_terms: [1, 3, 7] },
  { id: 3, term: "Viewport", related_terms: [1, 2] },
  { id: 4, term: "Mobile-First Design", related_terms: [1] },
  { id: 5, term: "Flexbox", related_terms: [6, 1] },
  { id: 6, term: "CSS Grid", related_terms: [5] },
  { id: 7, term: "Breakpoints", related_terms: [2, 1] },
  { id: 8, term: "Progressive Enhancement", related_terms: [9] },
  { id: 9, term: "Graceful Degradation", related_terms: [8] },
  { id: 10, term: "Accessibility (Доступность)", related_terms: [11] },
  { id: 11, term: "WCAG", related_terms: [10] },
  { id: 12, term: "Pixel Density", related_terms: [13] },
  { id: 13, term: "Retina Display", related_terms: [12] },
  { id: 14, term: "Responsive Images", related_terms: [15] },
  { id: 15, term: "Viewport Meta Tag", related_terms: [1] }
];

const MindMap = () => {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    const nodes = glossary.map(term => ({
      id: term.id,
      label: term.term,
    }));

    const edges = glossary.flatMap(term =>
      term.related_terms.map(relatedId => ({
        from: term.id,
        to: relatedId,
      }))
    );

    setGraphData({ nodes, edges });
  }, []);

  const options = {
    nodes: {
      shape: 'dot',
      size: 16,
    },
    edges: {
      smooth: true,
    },
  };

  return <Network graph={graphData} options={options} />;
};

export default MindMap;
