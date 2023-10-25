import { event } from 'sveltekit-sse';

/**
 *
 * @param {{milliseconds:number}} payload
 * @returns
 */
function delay({ milliseconds }) {
  return new Promise(function run(resolve) {
    setTimeout(resolve, milliseconds);
  });
}

export async function GET() {
  let keepAlive = true;
  return event(async function stream() {
    const a = Math.random();
    while (keepAlive) {
      console.log(a);
      await delay({ milliseconds: 1000 });
    }
  })
    .onCancel(() => {
      console.log('closed');
      keepAlive = false;
    })
    .toResponse();
}
