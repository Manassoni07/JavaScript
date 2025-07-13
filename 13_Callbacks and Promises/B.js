// When callbacks are nested inside other callbacks, it becomes messy: its is known as callbachhell


doTask1(() => {
    doTask2(() => {
        doTask3(() => {
            console.log("All tasks done");
        });
    });
});