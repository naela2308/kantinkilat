:root {
    --bg-color: #fcfcfc;
    --card-bg: #ffffff;
    --text-color: #212529;
    --text-muted: #6c757d;
    --primary-color: #ff6b35; 
    --primary-hover: #e85d24;
    --border-color: #dee2e6;
    --base-font-size: 16px;
}

body.dark-mode {
    --bg-color: #121212;
    --card-bg: #1e1e1e;
    --text-color: #f1f1f1;
    --text-muted: #adb5bd;
    --primary-color: #ff8559;
    --primary-hover: #ff6b35;
    --border-color: #2d2d2d;
}

body.large-text {
    --base-font-size: 20px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: var(--base-font-size);
    line-height: 1.5;
    transition: background-color 0.3s, color 0.3s;
}

.header {
    background-color: var(--primary-color);
    color: #ffffff;
    text-align: center;
    padding: 1.8rem 1rem;
}

body.dark-mode .header {
    color: #121212;
}

.accessibility-bar {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.accessibility-bar button {
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid currentColor;
    color: inherit;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8em;
    cursor: pointer;
}

.container {
    max-width: 800px;
    margin: 1.5rem auto;
    padding: 0 1rem 4rem 1rem;
}

.filter-buttons {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 10px;
    margin-bottom: 1.5rem;
}

.filter-btn {
    background-color: var(--card-bg);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9em;
    white-space: nowrap;
}

.filter-btn.active {
    background-color: var(--primary-color);
    color: #ffffff;
    border-color: var(--primary-color);
}

.menu-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.menu-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.menu-info h3 {
    font-size: 1.1em;
    margin-bottom: 4px;
}

.menu-info p {
    font-size: 0.85em;
    color: var(--text-muted);
    margin-bottom: 6px;
}

.menu-price {
    font-weight: bold;
    color: var(--primary-color);
}

.add-btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.9em;
    white-space: nowrap;
}

.add-btn:hover {
    background-color: var(--primary-hover);
}

.cart-section {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.03);
}

.cart-section h2 {
    font-size: 1.2em;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.empty-cart {
    color: var(--text-muted);
    font-size: 0.9em;
    font-style: italic;
}

.cart-item-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px dashed var(--border-color);
    font-size: 0.95em;
}

.eco-option {
    margin-top: 1rem;
    padding: 10px;
    background-color: var(--bg-color);
    border-radius: 8px;
    font-size: 0.9em;
    border: 1px dashed var(--border-color);
}

.eco-option label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cart-summary {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 2px solid var(--border-color);
}

#checkout-btn {
    background-color: #25d366; 
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
}

#checkout-btn:disabled {
    background-color: #adb5bd;
    cursor: not-allowed;
}

.footer {
    text-align: center;
    padding: 2rem;
    font-size: 0.85em;
    color: var(--text-muted);
}

@media (min-width: 600px) {
    .menu-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
