

.styledProgressInput {
  --progress-height: 5px;
  --progress-color: #b672ff;
  --progress-bg-color: #2e2e2e;

  margin: 0;
  width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;
  transition: height 0.2s;

  background: linear-gradient(to right, var(--progress-color) var(--value), var(--progress-bg-color) var(--value));
}

.styledProgressInput:hover {
  --progress-height: 8px;
}

/* Стили для WebKit браузеров */
.styledProgressInput::-webkit-slider-runnable-track {
  position: relative;
  height: var(--progress-height);
  background: var(--progress-bg-color);
}

.styledProgressInput::-webkit-slider-thumb {
  --thumb-height: 1px;
  --thumb-width: 1px;
  position: relative;
  -webkit-appearance: none;
  width: var(--thumb-width, var(--thumb-height));
  box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
    100vmax var(--progress-color);
}

/* Стили для Firefox */
.styledProgressInput::-moz-range-track {
  width: 100%;
  height: var(--progress-height);
  background: var(--progress-bg-color);
  border: none;
  border-radius: 0px;
}


.styledProgressInput::-moz-range-thumb {
  border: none;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: var(--progress-color);
}

.styledProgressInput::-moz-range-progress {
  background-color: var(--progress-color);
  height: var(--progress-height);
}