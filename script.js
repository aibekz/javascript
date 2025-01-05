const iif = (condition, ifTrue, ifFalse) => condition ? ifTrue() : ifFalse();

iif(
  Math.random() > 0.5,
  () => console.log("Heads"),
  () => console.log("Tails")
);