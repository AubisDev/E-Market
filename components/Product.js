

export default function Product({ name, price }) {
    return (
      <p style={{ display: 'inline-flex' }}>
        {name}: {price.formatted_with_symbol}
      </p>
    );
  }