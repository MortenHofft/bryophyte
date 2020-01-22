

// .level code {
//   border-radius: 4px;
// }


.level.is-mobile {
  display: flex;
}

.level.is-mobile .level-left,
.level.is-mobile .level-right {
  display: flex;
}

.level.is-mobile .level-left + .level-right {
  margin-top: 0;
}

.level.is-mobile .level-item:not(:last-child) {
  margin-bottom: 0;
  margin-right: 0.75rem;
}

.level.is-mobile .level-item:not(.is-narrow) {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  .level > .level-item:not(.is-narrow) {
    flex-grow: 1;
  }
}

.level-item .title,
.level-item .subtitle {
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .level-item:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}

.level-left .level-item.is-flexible,
.level-right .level-item.is-flexible {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  .level-left .level-item:not(:last-child),
  .level-right .level-item:not(:last-child) {
    margin-right: 0.75rem;
  }
}


@media screen and (max-width: 768px) {
  .level-left + .level-right {
    margin-top: 1.5rem;
  }
}



@media screen and (min-width: 769px), print {
  .level-right {
    display: flex;
  }
}