import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Pause, Sparkles, BarChart2 } from 'lucide-react';
import './SortingWidget.css';

export default function SortingWidget() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(14);
  const [algorithm, setAlgorithm] = useState('bubble');
  const [isSorting, setIsSorting] = useState(false);
  const [comparingIdx, setComparingIdx] = useState([]);
  const [swappingIdx, setSwappingIdx] = useState([]);
  const [sortedIdx, setSortedIdx] = useState([]);
  const [stats, setStats] = useState({ comparisons: 0, swaps: 0 });

  const isSortingRef = useRef(isSorting);
  isSortingRef.current = isSorting;

  // Generate random array
  const generateRandomArray = (size = arraySize) => {
    setIsSorting(false);
    setComparingIdx([]);
    setSwappingIdx([]);
    setSortedIdx([]);
    setStats({ comparisons: 0, swaps: 0 });
    const newArr = [];
    for (let i = 0; i < size; i++) {
      newArr.push(Math.floor(Math.random() * 85) + 15);
    }
    setArray(newArr);
  };

  useEffect(() => {
    generateRandomArray(arraySize);
  }, [arraySize]);

  // Helper sleep
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Bubble Sort Animation
  const runBubbleSort = async () => {
    const arr = [...array];
    let compCount = 0;
    let swapCount = 0;
    const n = arr.length;
    const sorted = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isSortingRef.current) return;

        setComparingIdx([j, j + 1]);
        compCount++;
        setStats({ comparisons: compCount, swaps: swapCount });
        await sleep(140);

        if (arr[j] > arr[j + 1]) {
          setSwappingIdx([j, j + 1]);
          swapCount++;
          setStats({ comparisons: compCount, swaps: swapCount });
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await sleep(140);
          setSwappingIdx([]);
        }
      }
      sorted.push(n - i - 1);
      setSortedIdx([...sorted]);
    }
    setComparingIdx([]);
    setIsSorting(false);
  };

  // Selection Sort Animation
  const runSelectionSort = async () => {
    const arr = [...array];
    let compCount = 0;
    let swapCount = 0;
    const n = arr.length;
    const sorted = [];

    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (!isSortingRef.current) return;
        setComparingIdx([minIdx, j]);
        compCount++;
        setStats({ comparisons: compCount, swaps: swapCount });
        await sleep(120);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        setSwappingIdx([i, minIdx]);
        swapCount++;
        setStats({ comparisons: compCount, swaps: swapCount });
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        setArray([...arr]);
        await sleep(160);
        setSwappingIdx([]);
      }
      sorted.push(i);
      setSortedIdx([...sorted]);
    }
    setComparingIdx([]);
    setIsSorting(false);
  };

  const handleStartSort = async () => {
    if (isSorting) {
      setIsSorting(false);
      return;
    }
    setIsSorting(true);
    setSortedIdx([]);
    if (algorithm === 'bubble') {
      await runBubbleSort();
    } else {
      await runSelectionSort();
    }
  };

  return (
    <div className="sorting-widget-container">
      <div className="widget-header">
        <div className="widget-title">
          <BarChart2 size={16} className="widget-icon" />
          <span>Interactive Sorting Demo</span>
        </div>
        <div className="widget-badge">
          <Sparkles size={13} />
          <span>30% Rendering Optimization</span>
        </div>
      </div>

      {/* Control Bar */}
      <div className="widget-controls">
        <div className="control-group">
          <label>Algorithm:</label>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            disabled={isSorting}
            className="widget-select"
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
          </select>
        </div>

        <div className="control-group">
          <label>Bars ({arraySize}):</label>
          <input
            type="range"
            min="8"
            max="20"
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            disabled={isSorting}
            className="widget-slider"
          />
        </div>

        <div className="button-group">
          <button
            onClick={handleStartSort}
            className={`widget-btn ${isSorting ? 'btn-pause' : 'btn-play'}`}
          >
            {isSorting ? <Pause size={14} /> : <Play size={14} />}
            <span>{isSorting ? 'Pause' : 'Start Visualizing'}</span>
          </button>

          <button
            onClick={() => generateRandomArray()}
            disabled={isSorting}
            className="widget-btn btn-reset"
          >
            <RotateCcw size={14} />
            <span>Shuffle</span>
          </button>
        </div>
      </div>

      {/* Visualizer Canvas Area */}
      <div className="visualizer-stage">
        {array.map((val, idx) => {
          let barClass = 'bar-default';
          if (sortedIdx.includes(idx)) barClass = 'bar-sorted';
          else if (swappingIdx.includes(idx)) barClass = 'bar-swapping';
          else if (comparingIdx.includes(idx)) barClass = 'bar-comparing';

          return (
            <div key={idx} className="bar-wrapper">
              <div
                className={`array-bar ${barClass}`}
                style={{ height: `${val}%` }}
              >
                <span className="bar-val">{val}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Stats */}
      <div className="widget-stats">
        <div className="stat-pill">
          <span>Comparisons:</span>
          <strong>{stats.comparisons}</strong>
        </div>
        <div className="stat-pill">
          <span>Swaps:</span>
          <strong>{stats.swaps}</strong>
        </div>
        <div className="stat-legend">
          <span className="legend-item"><span className="legend-box yellow"></span> Compare</span>
          <span className="legend-item"><span className="legend-box red"></span> Swap</span>
          <span className="legend-item"><span className="legend-box green"></span> Sorted</span>
        </div>
      </div>
    </div>
  );
}
