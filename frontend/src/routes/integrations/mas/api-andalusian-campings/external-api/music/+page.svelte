<script>
    import { onMount } from "svelte";
  
    let releases = [];
  
    onMount(async () => {
      try {
        const artists = [
          "5b11f4ce-a62d-471e-81fc-a69a8278c7da", // Nirvana
          "83d91898-7763-47d7-b03b-b92132375c47", // Pearl Jam
          "6dcd5d38-0a6d-4db6-afa6-498d63e96329", // Foo Fighters
          "e3cb0a9f-212c-4c1d-8c29-2d9fadea6b4e", // Radiohead
          "f4fdbb4c-e4b7-47a0-b83b-d91bbfcfa387" // Queen
        ];
  
        const promises = artists.map(artist =>
          fetch(
            `https://musicbrainz.org/ws/2/release?artist=${artist}&limit=30&fmt=json`
          ).then(response => response.json())
        );
  
        const responses = await Promise.all(promises);
        releases = responses.flatMap(response => response.releases || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  
    function getReleaseDate(release) {
      if (release && release["date"]) {
        return release["date"];
      }
      return "Unknown";
    }
  
    function getCountry(release) {
      if (
        release &&
        release["release-events"] &&
        release["release-events"][0] &&
        release["release-events"][0].area &&
        release["release-events"][0].area.name
      ) {
        return release["release-events"][0].area.name;
      }
      return "Unknown";
    }
  
    function getStatus(release) {
      if (release && release.status) {
        return release.status;
      }
      return "Unknown";
    }
  
    function getQuality(release) {
      if (release && release.quality) {
        return release.quality;
      }
      return "Unknown";
    }
  </script>
  
  {#if releases.length > 0}
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Release Date</th>
          <th>Country</th>
          <th>Status</th>
          <th>Quality</th>
        </tr>
      </thead>
      <tbody>
        {#each releases as release}
          <tr>
            <td>{release.title}</td>
            <td>{getReleaseDate(release)}</td>
            <td>{getCountry(release)}</td>
            <td>{getStatus(release)}</td>
            <td>{getQuality(release)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No releases found.</p>
  {/if}
  