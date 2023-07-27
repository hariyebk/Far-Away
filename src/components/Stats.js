export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats"> Start adding some items into your packing list 🚀 </p>;
  }

  // Drived state
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed === true).length;
  const totalPackedPercentage = Math.round(numPacked / numItems * 100);
  return <footer className="stats">
    {totalPackedPercentage === 100 ? <em> You got everything !! Ready to go ✈️🌍</em> : <em>  👜 You have {numItems} items in your List and you have already packed {numPacked} ({totalPackedPercentage}%) </em>}
  </footer>;

}
