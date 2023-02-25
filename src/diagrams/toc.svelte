<style>
    @media(max-width: 1000px) {
        :global(d-contents) {
            justify-self: start;
            align-self: start;
            /* grid-column-start: 2; */
            /* grid-column-end: 6; */
            padding-bottom: 0.5em;
            margin-bottom: 1em;
            padding-left: 0.25em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: rgba(0, 0, 0, 0.1);
        }
    }

    @media (min-width: 1000px) {
        :global(d-contents) {
            align-self: start;
            grid-column-start: 1;
            grid-column-end: 4;
            justify-self: end;
            padding-right: 3em;
            padding-left: 2em;
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            border-right-width: 1px;
            border-right-style: solid;
            border-right-color: rgba(0, 0, 0, 0.1);
        }
    }

    @media (min-width: 1180px) {
        :global(d-contents) {
            grid-column-start: 1;
            grid-column-end: 4;
            justify-self: end;
            padding-right: 3em;
            padding-left: 2em;
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            border-right-width: 1px;
            border-right-style: solid;
            border-right-color: rgba(0, 0, 0, 0.1);
        }
    }

    :global(d-contents nav h3) {
        margin-top: 0;
        margin-bottom: 1em;
    }

    :global(d-contents nav a) {
        color: rgba(0, 0, 0, 0.8);
        border-bottom: none;
        text-decoration: none;
    }

    :global(d-contents li) {
        list-style-type: none;
    }

    :global(d-contents ul) {
        padding-left: 1em;
    }

    :global(d-contents nav ul li) {
        margin-bottom: .25em;
    }

    :global(d-contents nav a:hover) {
        text-decoration: underline solid rgba(0, 0, 0, 0.6);
    }

    :global(d-contents nav ul) {
        margin-top: 0;
        margin-bottom: 6px;
    }

    :global(d-contents nav>div) {
        display: block;
        outline: none;
        margin-bottom: 0.5em;
    }

    :global(d-contents nav>div>a) {
        font-size: 13px;
        font-weight: 600;
    }

    :global(d-contents nav>div>a) {
        font-size: 13px;
        font-weight: 600;
    }

    :global(d-contents nav>div>a:hover,
    d-contents nav>ul>li>a:hover) {
        text-decoration: none;
    }
</style>

<nav class="l-text toc figcaption">
    <h3>Contents</h3>
    <div><a href="#abstract">Abstract</a></div>
    <div><a href="#introduction">Introduction</a></div>
    <div><a href="#understanding-culture">Understanding Culture</a></div>
    <ul>
      <li><a href="#considering-multilingual-speakers">Considering multilingual speakers</a></li>
      <li><a href="#considering-food">Considering Food</a></li>
      <li><a href="#considering-religion">Considering religion</a></li>
      <li><a href="#considering-country">Considering country</a></li>
    </ul>
    <div><a href="#understanding-bert">Understanding BERT</a></div>
    <ul>
        <li><a href="#21-introduction-to-bert">Introduction to BERT
        </a></li>
        <li><a href="#22-input">Input</a></li>
        <li><a href="#23-the-model">The model</a></li>
        <li><a href="#24-output">Output</a></li>
      </ul>
    <div><a href="#section-3-literature-review">Literature review</a></div>
    <ul>
        <li><a href="#31-using-word-embeddings-to-determine-bias">Using word embeddings to determine bias
        </a></li>
        <li><a href="#32-performing-bias-measurement-on-the-output">Performing bias measurement on the output</a></li>
        <li><a href="#33-findings-summary">Findings Summary</a></li>
      </ul>
    <div><a href="#section-4--bias-test-for-multiple-cultural-elements-using-modified-categorical-bias-score">Bias test
    </a></div>
    <ul>
        <li><a href="#section-41-introduction">Introduction</a></li>
        <li><a href="#making-systems-playful">Bias measurement on the output</a></li>
        <li><a href="#section-43-bias-for-individual-characteristics">Bias for interaction between characteristics
        </a></li>
        <li><a href="#section-43-bias-for-interaction-between-characteristics">The limitations of our approach</a></li>
      </ul>
      <div><a href="#appendix---a-gathering-data">Appendices</a></div>
</nav>
