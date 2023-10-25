<script>
  import { source } from 'sveltekit-sse';

  const data = source('/events');

  //   setTimeout(function run() {
  //     data.close();
  //   }, 5000);
</script>

{$data}
