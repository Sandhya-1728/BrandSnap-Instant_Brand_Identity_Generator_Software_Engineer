variable "environment" {
  description = "Environment name (e.g., dev, staging, prod)"
  type        = string
  default     = "dev"
}

variable "database_url" {
  description = "Database connection URL"
  type        = string
  sensitive   = true
}

variable "api_url" {
  description = "API URL for the backend service"
  type        = string
  default     = "http://backend-service:8000"
} 