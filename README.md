# BrandSnap - Instant Brand Identity Generator

BrandSnap is an intelligent platform that generates complete, cohesive brand identity kits leveraging cutting-edge AI technologies. Generate professional brand assets including logos, color schemes, typography, and complete brand guidelines with minimal input.

## 🚀 Features

- **AI-Powered Brand Generation**: Utilizes GPT-4 for brand strategy and Stability AI for visual assets
- **Comprehensive Brand Kits**: Generate complete brand identity packages including:
  - Logo designs
  - Color palettes
  - Typography recommendations
  - Brand guidelines
  - Marketing mockups
  - Pitch decks
- **Smart Recommendations**: AI-driven suggestions for brand naming, taglines, and mission statements
- **Cloud-Native Architecture**: Scalable, containerized deployment using Kubernetes
- **Asynchronous Processing**: Efficient handling of AI generation tasks using Celery

## 🛠 Tech Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend**: FastAPI (Python) + Celery
- **Database**: PostgreSQL + Redis
- **AI Integration**: GPT-4 (text) + Stability AI (images)
- **Cloud Services**: AWS S3, Azure AKS/AWS EKS
- **DevOps**: Docker, Terraform, GitHub Actions

## 🔧 Development Setup

### Prerequisites

- Python 3.9+
- Node.js 18+
- Docker
- PostgreSQL 14+
- Redis

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/brandsnap.git
   cd brandsnap
   ```

2. Backend setup:

   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Frontend setup:

   ```bash
   cd frontend
   npm install
   ```

4. Set up environment variables:

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Start development servers:

   ```bash
   # Backend
   cd backend
   uvicorn app.main:app --reload

   # Frontend
   cd frontend
   npm run dev
   ```

## 🚀 Deployment

The application is containerized and can be deployed to either Azure AKS or AWS EKS using Terraform and GitHub Actions. Refer to the `/deploy` directory for detailed deployment instructions.

## 📝 License

[MIT License](LICENSE)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.
