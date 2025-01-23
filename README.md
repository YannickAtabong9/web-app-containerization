# Web App Containerization with CI/CD

This project demonstrates the containerization of a web application with Docker, integrated with CI/CD pipelines, vulnerability scanning using Snyk, and monitoring using Prometheus and Grafana.

## Technologies Used
- Docker
- GitHub Actions (CI/CD)
- Snyk (Security Scanning)
- Prometheus (Monitoring)
- Grafana (Monitoring)

## How to Run

1. Clone the repository:
    ```bash
    git clone https://github.com/YannickAtabong9/web-app-containerization.git
    cd web-app-containerization
    ```

2. Build and run the application:
    ```bash
    docker-compose up --build
    ```

3. Access the application at:
    - Frontend: `http://localhost:3001`
    - Backend: `http://localhost:5000`

## CI/CD
- This project includes a GitHub Actions workflow for automating the build, test, and deployment processes.

## Security
- The project is integrated with Snyk for continuous security scanning of the Docker images.

## Monitoring
- Prometheus and Grafana are set up for real-time monitoring of the containers.

