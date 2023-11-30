/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
const createRestaurantCardSkeleton = (skeletonCard) => {
  let skeleton = '';

  for (let i = 0; i < skeletonCard; i++) {
    skeleton += `
      <article class="card-skeleton-container">
        <div class="image-skeleton">
        </div>

        <div class="desc-skeleton-container">
          <div class="title-skeleton"></div>
          <ul class="text-skeleton">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="button-skeleton"></div>
        </div>
      </article>
    `;
  }

  return skeleton;
};

const createLoadingSpinner = () => {
  return `
    <div class="loading">
      <div class="container-loading">
        <div class="load-dual-ring"></div>
        <div class="text-loading">Loading....</div>
      </div>
    </div>
  `;
};

const createErrorState = () => {
  return `
    <div class="error-fallback">
      <p>Something went wrong, cannot load data. check your connection</p>
    </div>
  `;
};

export { createRestaurantCardSkeleton, createLoadingSpinner, createErrorState };
