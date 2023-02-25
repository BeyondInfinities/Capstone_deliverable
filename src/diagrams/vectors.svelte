<script src="https://unpkg.com/@saehrimnir/druidjs">
    var word1, word2, word3, word4 = "";
    // var w2v = require( 'word2vec' );
    // import * as druid from "@saehrimnir/druidjs";
    // convert the words to vectors and then do a PCA on them to get the 2D coordinates
    // normalize those coordinates
    // and Plot those coordinates using arrows

    // Let the user pick the words, dimensional reduction technique and 
    // word2vec model to use.

    var selected_word2vec_model = "Google Word2Vec";
    var selected_dim_reduction_technique = "PCA";

    var word2vec_models = [
        "Google Word2Vec",
        "GloVe"]
    
    var dim_reduction_techniques = [
        "PCA",
        "t-SNE",
        "UMAP"]

    var sample_data = [
        [12,123,45,667,678,456,234,243,234],
        [12,123,45,123,678,123,231,243,234],
        [12,123,45,123,678,322,132,243,234],
        [12,123,45,341,678,223,123,243,234]
    ]

    var parms = {
        "PCA": {},
        "UMAPS": {
            "n_neighbors": 10,
            "min_dist": 1,
            "local_conn": 1
        },
        "t-SNE":{
            "perplexity": 10,
            "epsilon": 5,
        }
    }

    const dim_reduction = druid[dim_reduction_techniques](sample_data, ...parms[dim_reduction_techniques]);
    var vectors = dim_reduction.transform();

    console.log(vectors, "vectors", dim_reduction_techniques)



    function vectorize(){
        console.log("vectorize")
    }


</script>


<div>
    <form>
        <!-- Let the user select the techniques and models form drop box-->
        <select bind:value={selected_word2vec_model}>
            {#each word2vec_models as model}
                <option value={model}>{model}</option>
            {/each}
        </select>
        <select bind:value={selected_dim_reduction_technique}>
            {#each dim_reduction_techniques as technique}
                <option value={technique}>{technique}</option>
            {/each}
        </select>

        <input type="text" bind:value={word1} placeholder="word1"/>
        <input type="text" bind:value={word2} placeholder="word2"/>
        <input type="text" bind:value={word3} placeholder="word3"/>
        <input type="text" bind:value={word4} placeholder="word4"/>

        <button on:click={vectorize}>Get Vectors</button>

        
    </form>
</div>