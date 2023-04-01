<script>
	let text = "The religion of a person who speaks Spanish is [MASK].";

    import HuggingFace from 'huggingface'

    const hf = new HuggingFace('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')

    // Natural Language
    let sol = null;
    async function unmask(event) {
        if (event) event.preventDefault();
        sol = await hf.fillMask({
            model: 'bert-base-uncased',
            inputs: text
        })
        console.log(sol)
    }

</script>

<style>
    .unmask-form {
        display: flex;
        gap: 10px;
    }

    .unmask-form-input {
        flex-grow: 1;
    }
</style>

<div>
    <h2>Unmasker</h2>
    <p>Enter a sentence with a masked word and click the button to unmask it.</p>
    <form class="unmask-form">
        <input type="text" class="unmask-form-input" bind:value={text} placeholder="The religion of a person who speaks Spanish is [MASK]."/>
        <button type="submit" on:click={unmask}>Unmask</button>
    </form>

    {#if sol}
        <h3>BERT Predictions:</h3>
        <ul>
            {#each sol as s}
                <li>BERT predicted <strong>{s.token_str}</strong> with a probability of {s.score.toFixed(4)}</li>
            {/each}
        </ul>
    {/if}
</div>
