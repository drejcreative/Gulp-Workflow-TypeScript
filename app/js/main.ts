function hello(compiler: string) {
    const msg = `Hello from ${compiler}`;
    console.log(msg);
    const message = document.querySelector('.typescript');
    message.innerHTML = msg ;
}

hello("TypeScript");
