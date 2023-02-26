<script>
	let text = "The religion of a person who speaks Spanish is [MASK].";

    import HuggingFace from 'huggingface'

    const hf = new HuggingFace('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')

    // Natural Language
    var sol = null;
    async function unmask(event) {
        // set the solution to the 
        if (event) event.preventDefault();
        sol = await hf.fillMask({
        model: 'bert-base-uncased',
        inputs: text
        })
        console.log(sol)
    }

</script>

<div>
    <b>Unmasker</b>
    <p>Enter a sentence with a masked word and click the button to unmask it.</p>
<form class="unmask-form">
    <input type="text" class="unmask-form-input" bind:value={text} placeholder="The religion of a person who speaks Spanish is [MASK]."/>
    <button type="submit" on:click={unmask}>Unmask</button>
</form>

{#if sol}
    {#each sol as s}
        <p>BERT predicted {s.token_str} with a probability {s.score}</p>
    {/each}
{/if}

</div>
