// src/Components/PaginationBar.jsx
import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const PaginationBar = ({
  currentPage,
  totalPages,
  itemsPerPage,
  setItemsPerPage,
  onPageChange,
  label = "Movies",
}) => {
  const colors = {
    link: "#4ea5ff",       // page numbers
    linkHover: "#8fc6ff",
    active: "#ffa94d",     // active page
    muted: "rgba(255,255,255,0.45)", // ellipsis / disabled
    text: "#ffffff",       // labels
    border: "rgba(255,255,255,0.25)", // top/bottom/vertical rules
  };

  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  // Build a compact sequence like: 1 2 3 … 78 79  (or centered around current)
  const getCompactPages = (current, total) => {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current <= 3) {
      // 1 2 3 … (total-1) total
      return [1, 2, 3, "ellipsis", total - 1, total];
    }

    if (current >= total - 2) {
      // 1 2 … (total-2) (total-1) total
      return [1, 2, "ellipsis", total - 2, total - 1, total];
    }

    // 1 … (current-1) current (current+1) … total
    return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
  };

  const pages = getCompactPages(currentPage, Math.max(totalPages, 1));

  const Arrow = ({ dir }) => {
    const isPrev = dir === "prev";
    const enabled = isPrev ? canPrev : canNext;
    const labelText = isPrev ? "‹" : "›";

    return (
      <span
        role="button"
        aria-disabled={!enabled}
        onClick={() => enabled && onPageChange(currentPage + (isPrev ? -1 : 1))}
        tabIndex={-1}
        style={{
          fontSize: 13,
          fontWeight: 600,
          marginInline: 8,
          color: enabled ? colors.link : colors.muted,
          cursor: enabled ? "pointer" : "not-allowed",
          userSelect: "none",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          if (enabled) e.currentTarget.style.color = colors.linkHover;
        }}
        onMouseLeave={(e) => {
          if (enabled) e.currentTarget.style.color = colors.link;
        }}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && enabled) {
            onPageChange(currentPage + (isPrev ? -1 : 1));
          }
        }}
      >
        {labelText}
      </span>
    );
  };

  return (
    <Row
      className="align-items-center justify-content-between mt-4"
      style={{
        //  thinner, sharper bar like your reference
        paddingTop: 10,          // tweak height here
        paddingBottom: 10,       // tweak height here
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      {/* LEFT: label + select with a vertical divider */}
      <Col
        xs="auto"
        className="d-flex align-items-center"
        style={{
          //  vertical divider after the dropdown (full bar height)
          borderRight: `1px solid ${colors.border}`,
          paddingRight: 20, // space before divider
        }}
      >
        <span
          className="me-2"
          style={{ color: colors.text, fontSize: 13, fontWeight: 500 }}
        >
          {label} per page:
        </span>

        <Form.Select
          value={itemsPerPage}
          onChange={(e) => {
            const val = Number(e.target.value);
            setItemsPerPage(val);
            onPageChange(1);
          }}
          size="sm"
          className="bg-dark text-white border-secondary"
          style={{
            width: 180,     // dropdown width
            height: 30,     // dropdown height
            fontSize: 13,
            borderRadius: 6,
          }}
        >
          <option value="10">10 {label}</option>
          <option value="20">20 {label}</option>
          <option value="50">50 {label}</option>
        </Form.Select>
      </Col>

      {/* RIGHT: Page X of Y : [numbers] */}
      <Col
        xs="auto"
        className="d-flex align-items-center"
        style={{
          paddingLeft: 20, //  small gap after the vertical divider
        }}
      >
        <span
          className="me-2"
          style={{ color: colors.text, fontSize: 13, fontWeight: 500 }}
        >
          Page {currentPage} of {Math.max(totalPages, 1)}:
        </span>

        {/* small space before numbers, like your sample */}
        <div style={{ width: 2 }} />

        <Arrow dir="prev" />

        {/* Numbers / ellipsis */}
        <div aria-label="pagination" style={{ display: "inline-block" }}>
          {pages.map((p, idx) => {
            if (p === "ellipsis") {
              return (
                <span
                  key={`e-${idx}`}
                  style={{
                    fontSize: 13,
                    color: colors.muted,
                    marginInline: 6,
                    userSelect: "none",
                  }}
                >
                  …
                </span>
              );
            }

            const isActive = p === currentPage;
            return (
              <span
                key={p}
                role="button"
                tabIndex={-1}
                onClick={() => !isActive && onPageChange(p)}
                onKeyDown={(e) => {
                  if ((e.key === "Enter" || e.key === " ") && !isActive) {
                    onPageChange(p);
                  }
                }}
                style={{
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? colors.active : colors.link,
                  cursor: isActive ? "default" : "pointer",
                  userSelect: "none",
                  display: "inline-block",
                  marginInline: 6, // spacing between numbers
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = colors.linkHover;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = colors.link;
                }}
              >
                {p}
              </span>
            );
          })}
        </div>

        <Arrow dir="next" />
      </Col>
    </Row>
  );
};

export default PaginationBar;
