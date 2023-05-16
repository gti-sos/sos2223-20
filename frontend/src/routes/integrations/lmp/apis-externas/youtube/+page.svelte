<script>
    // @ts-nocheck
    
      import axios from 'axios';
      let data;
      let selectedVideoId;
    
      function playVideo(videoId) {
        selectedVideoId = videoId;
        const iframe = document.getElementById('youtube-player');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
      }
    
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: '',//key de la API
          q: 'Búsqueda de ejemplo',
          part: 'snippet'
        }
      }).then(response => {
        data = response.data;
      });
    </script>
    <main>
    <h1>Resultados de búsqueda Youtube:</h1>
    
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe id="youtube-player" width="560" height="315" frameborder="0" allowfullscreen></iframe>
    
    {#if data}
      {#each data.items as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => playVideo(item.id.videoId)}>
          <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
          <h2>{item.snippet.title}</h2>
          <p>{item.snippet.description}</p>
        </div>
      {/each}
    {:else}
      <p>Cargando resultados...</p>
    {/if}
</main>
      <style>
        h1 {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    
    div {
      display: flex;
      border: 1px solid #dddddda5;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    div:hover {
      box-shadow: 0 0 5px #aaa;
    }
    
    img {
      display: block;
      margin-right: 10px;
      width: 120px;
      height: 90px;
      object-fit: cover;
      border-radius: 3px;
    }
    
    h2 {
      font-size: 18px;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 5px;
    }
    
    p {
      font-size: 14px;
      margin: 0;
      line-height: 1.5;
      color: #666;
    }
    
      </style>