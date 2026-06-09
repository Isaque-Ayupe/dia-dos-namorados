export const musicConfig = {
  /** Nome da música exibido no player */
  trackName: "Can't Help Falling in Love",
  /** Nome do artista exibido no player */
  artistName: "Elvis Presley",
  /** ID da faixa no Spotify — extraído da URL de compartilhamento */
  spotifyTrackId: "44AyOl4qVkzS48vBsbNXaC",
  /** URL completa do embed — gerada automaticamente a partir do ID */
  get spotifyEmbedUrl() {
    return `https://open.spotify.com/embed/track/${this.spotifyTrackId}?utm_source=generator&theme=0`;
  },
};
