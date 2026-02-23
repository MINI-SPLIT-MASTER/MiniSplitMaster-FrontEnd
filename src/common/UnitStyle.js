import "./styles.css";
import { useState } from "react";

export const UnitStyle = ({ data, sty, style, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mini-split-card"
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Badge de "BEST" - Posicionado arriba */}
      <div style={{ position: 'relative' }}>
        <div
          className="product-badge"
          style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            zIndex: 2,
          }}
        >
          <span
            className="product-tag rounded"
            style={{
              background: 'linear-gradient(135deg, #6dc5d8 0%, #5ba7b5 100%)',
              color: '#ffffff',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.75em',
              fontWeight: '700',
              letterSpacing: '0.5px',
              boxShadow: '0 2px 8px rgba(109, 197, 216, 0.3)',
              textTransform: 'uppercase',
            }}
          >
            BEST SELLER
          </span>
        </div>

        {/* Imagen del producto */}
        <div
          style={{
            background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
            padding: '40px 20px 20px',
            textAlign: 'center',
            transition: 'transform 0.4s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <img
            className="img-responsiva"
            src="https://minisplitmaster.us/wp-content/uploads/2025/10/Midea-All-Easy-Pro-e1756498692370-removebg-preview.png"
            alt="All Easy Pro Wall Mounted Split"
            style={{
              height: '200px',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              margin: '0 auto',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
            }}
          />
        </div>
      </div>

      {/* Contenido del producto */}
      <div style={{ padding: '20px', position: 'relative' }}>
        {/* Título del producto */}
        <h4
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.1em',
            fontWeight: '600',
            color: '#2c3e50',
            margin: '0 0 15px 0',
            lineHeight: '1.4',
            minHeight: '2.8em',
          }}
        >
          All Easy Pro Wall Mounted Split
        </h4>

        {/* Modelo */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.85em',
            color: '#7f8c8d',
            margin: '0 0 20px 0',
          }}
        >
          Model: MSEHU-H12B-2A / MO1ES-H12B-2A
        </p>

        {/* Contenedor de especificaciones con animación */}
        <div
          style={{
            position: 'relative',
            height: '140px',
            marginBottom: '20px',
            overflow: 'hidden',
          }}
        >
          {/* Panel de especificaciones deslizante */}
          <div
            className="specs-slide-panel"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: '100%',
              height: '100%',
              transform: isHovered ? 'translateX(0)' : 'translateX(100%)',
              opacity: isHovered ? 1 : 0,
              transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.4s ease',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              borderRadius: '10px',
              padding: '15px',
              boxShadow: isHovered ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none',
            }}
          >
            <div
              className="specs-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                height: '100%',
              }}
            >
              <div className="spec-item">
                <div
                  style={{
                    fontSize: '0.75em',
                    color: '#7f8c8d',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px',
                    fontWeight: '600',
                  }}
                >
                  Cooling BTU
                </div>
                <div
                  style={{
                    fontSize: '1.1em',
                    color: '#2c3e50',
                    fontWeight: '700',
                  }}
                >
                  12,000
                </div>
              </div>

              <div className="spec-item">
                <div
                  style={{
                    fontSize: '0.75em',
                    color: '#7f8c8d',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px',
                    fontWeight: '600',
                  }}
                >
                  Heating BTU
                </div>
                <div
                  style={{
                    fontSize: '1.1em',
                    color: '#2c3e50',
                    fontWeight: '700',
                  }}
                >
                  12,000
                </div>
              </div>

              <div className="spec-item">
                <div
                  style={{
                    fontSize: '0.75em',
                    color: '#7f8c8d',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px',
                    fontWeight: '600',
                  }}
                >
                  SEER Rating
                </div>
                <div
                  style={{
                    fontSize: '1.1em',
                    color: '#09a498',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  25.5
                  <span
                    title="Seasonal Energy Efficiency Ratio - Higher is better"
                    style={{
                      cursor: 'help',
                      fontSize: '0.8em',
                      color: '#09a498',
                    }}
                  >
                    ⓘ
                  </span>
                </div>
              </div>

              <div className="spec-item">
                <div
                  style={{
                    fontSize: '0.75em',
                    color: '#7f8c8d',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px',
                    fontWeight: '600',
                  }}
                >
                  Power
                </div>
                <div
                  style={{
                    fontSize: '1.1em',
                    color: '#2c3e50',
                    fontWeight: '700',
                  }}
                >
                  208-230V
                </div>
              </div>
            </div>
          </div>

          {/* Indicador "Hover for specs" cuando no está en hover */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${isHovered ? 0 : 1})`,
              opacity: isHovered ? 0 : 1,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #09a498 0%, #087e75 100%)',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '25px',
                fontSize: '0.85em',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(9, 164, 152, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>🔍</span>
              Hover to see specifications
            </div>
          </div>
        </div>

        {/* Banner de instalación incluida */}
        <div
          style={{
            background: 'linear-gradient(135deg, #e8f5f4 0%, #d4ede9 100%)',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          }}
        >
          <span style={{ fontSize: '1.2em' }}>✓</span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9em',
              fontWeight: '600',
              color: '#09a498',
            }}
          >
            Installation Included
          </span>
        </div>

        {/* Precio y botón */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '15px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.75em',
                color: '#7f8c8d',
                marginBottom: '4px',
                fontWeight: '600',
              }}
            >
              Total Price
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.8em',
                fontWeight: '700',
                color: '#2c3e50',
              }}
            >
              $1,707
              <span style={{ fontSize: '0.6em', color: '#7f8c8d' }}>.38</span>
            </div>
          </div>

          <button
            className="see-more-btn"
            style={{
              background: 'linear-gradient(135deg, #09a498 0%, #087e75 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '0.95em',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(9, 164, 152, 0.25)',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            type="button"
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px) scale(1.05)';
              e.target.style.boxShadow = '0 6px 16px rgba(9, 164, 152, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = isHovered ? 'scale(1.05)' : 'scale(1)';
              e.target.style.boxShadow = '0 4px 12px rgba(9, 164, 152, 0.25)';
            }}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};