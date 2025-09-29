export const UnitStyle = ({ data, sty, style, ...props }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0f7fa 0%, #f3f4f4 100%)",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        padding: "28px 24px",
        boxSizing: "border-box",
        flexDirection: "column",
        margin: 0,
        ...style,
        ...sty,
      }}
      {...props}
    >
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          textAlign: "center",
          marginBottom: "18px",
        }}
      >
        <h4 style={{ margin: 0, fontSize: "1.2em", fontWeight: 600, color: "#2d3a4a" }}>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://minisplitmaster.us/product/all-easy-pro-wall-mounted-split-msehu-h12b-2a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All Easy Pro Wall – Mounted Split – MSEHU-H12B-2A / MO1ES-H12B-2A
          </a>
        </h4>
      </div>
      <div className="product-details-main" style={{ display: "flex", gap: "32px" }}>
        <div
          style={{
            flexShrink: 0,
            textAlign: "center",
            marginLeft: "0",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            padding: "16px",
          }}
        >
          <img
            style={{
              height: "180px",
              width: "auto",
              display: "block",
              margin: "0 auto 12px auto",
              borderRadius: "8px",
              background: "#f8fafb",
            }}
            src="https://minisplitmaster.us/wp-content/uploads/2025/06/Midea-All-Easy-Pro-e1756498692370.png"
            alt="All Easy Pro Wall – Mounted Split"
          />
          <div style={{ margin: "10px 0 0 0" }}>
            <h5
              style={{
                display: "inline-block",
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#388e7d",
                fontSize: "1.05em",
                letterSpacing: "0.5px",
              }}
            >
              PRICE: <span className="price-new" style={{ color: "#e57373", fontWeight: 700 }}> $1,707.38 </span>
            </h5>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "18px",
            minWidth: "220px",
          }}
        >
          <div
            className="rating-wrap"
            style={{
              paddingTop: "0",
              fontFamily: "Inter, sans-serif",
              textAlign: "left",
              color: "#2d3a4a",
              fontSize: "1em",
              lineHeight: 1.7,
            }}
          >
            <div
              className="contener"
              style={{
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              <span
                className="product-tag rounded"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background: "linear-gradient(90deg, #6dc5d8 60%, #6cbdb6 100%)",
                  color: "#fff",
                  padding: "4px 14px",
                  borderRadius: "16px",
                  fontWeight: 600,
                  fontSize: "0.95em",
                  letterSpacing: "1px",
                  boxShadow: "0 1px 4px rgba(108,189,182,0.08)",
                }}
              >
                BEST
              </span>
            </div>
            <div>
              <strong>Cooling BTU's:</strong> 12,000<br />
              <strong>Heating BTU's:</strong> 12,000<br />
              <strong>SEER:</strong> 25.5<br />
              <strong>Power:</strong> 208-230V/60
            </div>
          </div>
          <div
            className="only-circle"
            style={{
              textAlign: "left",
              marginTop: "0",
            }}
          >
            <button
              className="all-easy-pro-wall-mounted-split-msehu-h12b-2a-mo1es-h12b-2a"
              style={{
                background: "linear-gradient(90deg, #6cbdb6 60%, #6dc5d8 100%)",
                color: "#fff",
                padding: "10px 36px",
                border: "none",
                borderRadius: "24px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "1em",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(108,189,182,0.10)",
                transition: "background 0.2s",
              }}
              type="button"
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
