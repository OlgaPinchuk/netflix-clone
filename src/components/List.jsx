export default function List({ list, Component, ...compProps }) {
  const Items = list.map((item) => (
    <Component key={item.id} {...compProps} item={item} />
  ));
  return <ul>{Items}</ul>;
}
