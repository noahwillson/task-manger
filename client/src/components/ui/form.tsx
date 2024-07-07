export const Form = ({
  title,
  children,
  onSubmit,
  error,
}: {
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: unknown;
}) => {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h2>{title}</h2>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {children}
      </form>
      <>
        {error && (
          <div style={{ color: "tomato" }}>
            {JSON.stringify(error, null, 2)}
          </div>
        )}
      </>
    </div>
  );
};
