<template>
  <div class="container">
    <base-section>
      <h1>Vue Simple Stepper</h1>
      <div class="links-container">
        <a
          aria-label="Link to Github"
          href="https://github.com/Tauromachian/vue-simple-stepper"
        >
          <icon-helper icon="mdiGithub" width="50px" height="50px" />
        </a>
        <a
          aria-label="Link to NPM"
          href="https://www.npmjs.com/package/vue-simple-stepper"
        >
          <icon-helper icon="mdiNpm" width="50px" height="50px" />
        </a>
      </div>
      <app-card>
        <card-text>
          <example-one></example-one>
        </card-text>
      </app-card>
      <p>
        Stepper component designed to guide users through a multi-step process,
        like a registration form or setup process. It provides a clear
        indication of the current, completed, and upcoming steps, and also
        allows for navigating between these steps.
      </p>
    </base-section>

    <features-section></features-section>

    <client-only>
      <base-section title="Installation">
        <p>Install it from npm</p>
        <pre
          class="language-javascript"
        ><code>npm install vue-simple-stepper</code></pre>
        <p>You need to import the component doing:</p>
        <pre
          class="language-javascript"
        ><code>import VueSimpleStepper from 'vue-simple-stepper'</code></pre>
        <p>And its styles like this:</p>
        <pre
          class="language-javascript"
        ><code>import "vue-simple-stepper/dist/style.css";</code></pre>
      </base-section>
    </client-only>

    <client-only>
      <base-section title="Use">
        <p>The easiest way to use is to copy and throw this in your code:</p>
        <pre class="language-html" data-src="ExampleOne.vue"></pre>
        <p>
          Any element found in the default slot of the component will be
          automatically added to the stepper. Notice that the steps data prop
          number coincides with the number of elements in the stepper.
        </p>
        <p>
          You can set a default starting point of the component with the step
          prop. With it you can also control the stepper programmatically.
        </p>
        <p>Any time the actions of the stepper are clicked the events:</p>
        <ul>
          <li><app-chip> click:next </app-chip></li>
          <li><app-chip>click:previous</app-chip></li>
          <li>
            <app-chip>click:submit </app-chip>Are going to be emitted in by the
            stepper on click of the respective action.
          </li>
        </ul>
        <p>
          One common problem is the customization of the stepper to fit the
          framework or styles of choice. In that case you can do it by using the
          CSS variables:
        </p>
        <pre class="language-css" data-src="root-general-styles.css"></pre>
        <p>
          Or in case you want to further customize the buttons you can overwrite
          or extend these classes:
        </p>
        <pre class="language-css" data-src="component-css-styles.css"></pre>
        <p>
          In case that you need to overwrite completely the action buttons do it
          by using the <app-chip> actions </app-chip>slot like so:
        </p>
        <pre class="language-html" data-src="ExampleTwo.vue"></pre>
        <app-card>
          <card-text>
            <example-two></example-two>
          </card-text>
        </app-card>
      </base-section>
    </client-only>

    <base-section title="Props">
      <ul>
        <li>
          <app-chip> steps: </app-chip>
          An array that defines the steps in the stepper. The length of the
          array determines the number of steps. Default is an empty array.
        </li>
        <li>
          <app-chip> step: </app-chip>
          A number indicating the current step. Starts from 1 and default is 1.
        </li>
      </ul>
    </base-section>

    <base-section title="Events">
      <ul>
        <li>
          <app-chip> click:next: </app-chip> Triggered when the next button is
          clicked.
        </li>
        <li>
          <app-chip> click:previous: </app-chip> Triggered when the previous
          button is clicked.
        </li>
        <li>
          <app-chip> click:submit: </app-chip>
          Triggered when the submit button is clicked.
        </li>
      </ul>
    </base-section>
    <base-section title="Slots">
      <ul>
        <li>
          <app-chip> actions: </app-chip>

          For customizing the action buttons (next, previous, submit) of the
          stepper.
        </li>
      </ul>
    </base-section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";

import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";

import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";

onMounted(async () => {
  await nextTick();
  Prism.highlightAll();
});
</script>

<style>
.container {
  margin: 0 0.4em;
  max-width: 600px;
  margin-bottom: 42.88px;
}

@media screen and (min-width: 600px) {
  .container {
    margin: 0 auto;
    margin-bottom: 100px;
  }
}

.links-container {
  display: flex;
  gap: 1em;
  justify-content: left;
}
</style>
