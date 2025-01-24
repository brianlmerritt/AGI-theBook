FROM --platform=linux/arm64 python:3.11-slim-bullseye

# Install Node.js and required system libraries
RUN apt-get update && apt-get install -y \
    curl \
    git \
    build-essential \
    libc6 \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Create entrypoint script
RUN echo '#!/bin/bash\n\
npm install\n\
npm install @next/swc-linux-arm64-gnu @next/swc-linux-arm64-musl\n\
exec "$@"' > /entrypoint.sh && \
    chmod +x /entrypoint.sh

COPY . .

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["npm", "run", "dev"]