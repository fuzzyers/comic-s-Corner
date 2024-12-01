CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comic_books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    issue INT NOT NULL,
    release_date TIMESTAMP NULL
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 10),
    comic_id INT NOT NULL,
    user_id INT NOT NULL,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (comic_id) REFERENCES comic_books (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    review_id INT NOT NULL,
    comment TEXT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (review_id) REFERENCES reviews (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);