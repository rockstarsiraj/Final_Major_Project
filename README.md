Dataset Title
Fakeddit: A Multimodal Fake News Detection Dataset

Usage of Dataset
The dataset is used to train, validate, and evaluate multimodal deep learning models for detecting fake news by combining textual headlines and associated images. It supports both binary (Real vs Fake) and multi-class classification tasks. In this project, the dataset is used to build and compare hybrid architectures such as BERT + MobileNetV2, CLIP + MLP, and DistilBERT + EfficientNet.

Dataset Information
Dataset Name: Fakeddit

Source: Reddit posts collected and annotated for fake news detection

Domain: Social Media / News / Multimodal AI

Task: Multimodal Fake News Classification

Problem Type: Supervised Learning (Binary Classification)

File Format: CSV (metadata & labels), JPEG/PNG (images)

Dataset Link: https://github.com/entitize/Fakeddit

Dataset Overview
Total Records: ~1,000,000+ posts

Labeled Records: Over 800,000 labeled multimodal samples

Classes:

Real

Fake
(Also supports fine-grained multi-class labels)

Annotation Type: Human-annotated with credibility labels

Why This Dataset?
• It contains aligned text + image pairs, making it ideal for multimodal learning.
• Large-scale dataset improves model generalization.
• Real-world Reddit data reflects practical misinformation scenarios.
• Supports both binary and multi-class classification.
• Widely used benchmark dataset in multimodal fake news research.
• Suitable for training transformer-based and CNN-based architectures.

Features Used
Feature 1: Text Content
News headline or Reddit post title

Processed using BERT / DistilBERT

Tokenization, padding, and embedding extraction

Feature 2: Image Content
Associated image with the post

Processed using MobileNetV2 / EfficientNet / CLIP

Resized and normalized

Feature 3: Multimodal Embeddings
Concatenated feature vectors from text and image encoders

Used as input to MLP classifier

Enables cross-modal feature learning

Summary
The Fakeddit dataset provides a comprehensive multimodal benchmark for fake news detection research. By combining textual and visual modalities, it enables the development of robust deep learning models capable of capturing semantic inconsistencies between news headlines and associated images. Its large-scale and real-world nature make it highly suitable for evaluating advanced multimodal architectures and improving automated misinformation detection systems.
