/**
 * Reusable JSON-LD component for Schema.org structured data.
 * Safely stringifies structured data objects for Google Rich Results.
 */
export default function JsonLd({data}) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
