# Contributing Guidelines

## Development Setup

### Prerequisites
- Node.js 18+ or Bun 1.4+
- Python 3.11+
- Git

### Local Development

1. **Clone Repository**
```bash
git clone https://github.com/aayush-ethclhkr/crypto-trace-ai.git
cd crypto-trace-ai
```

2. **Install Dependencies**
```bash
# Frontend
bun install

# Backend
cd api && pip install -r requirements.txt
cd ../engine && pip install -r requirements.txt
```

3. **Configure Environment**
Copy `.env.example` files and add your API keys.

4. **Start Development Servers**
```bash
# Terminal 1: Backend
cd api && python main.py

# Terminal 2: Frontend
bun run dev
```

---

## Code Style

### TypeScript/React
- Use TypeScript strict mode
- Follow React hooks best practices
- Use functional components
- Maintain component modularity

### Python
- Follow PEP 8 style guide
- Use type hints
- Write docstrings for functions
- Keep modules focused and single-purpose

---

## Git Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "feat: description"`
3. Push to GitHub: `git push origin feature/your-feature`
4. Create Pull Request

### Commit Message Convention
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

---

## Testing

Before submitting changes:
1. Test frontend build: `bun run build`
2. Verify backend starts without errors
3. Test API endpoints
4. Check for TypeScript compilation errors

---

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update README.md if adding features
4. Request review from maintainers
