export default function Footer() {
  return (
    <footer className="custom-footer text-center py-3">
      <div className="container">
        <p className="mb-0" style={{ color: 'var(--btn-color)' }}>
          © {new Date().getFullYear()} <strong>Infinity Team</strong> — All rights reserved.
        </p>
      </div>
    </footer>
  );
}