
export function register(runtime) {
    runtime.registerGenerator('particles', (canvas, params) => {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'transparent'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.fillStyle = 'white'; for(let i=0; i<100; i++) { ctx.beginPath(); ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*3, 0, Math.PI*2); ctx.fill(); }
    });
}
