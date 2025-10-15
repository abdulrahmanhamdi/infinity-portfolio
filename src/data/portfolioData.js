// src/data/portfolioData.js

export const portfolioData = [
  // === PROJECT 1 ===
  {
    id: 'student-recommendation-system',
    title: 'Student Elective Course Recommendation System',
    category: 'AI / Recommender Systems',
    year: 2025,
    summary:
      'A Django-based intelligent elective course recommendation system using Item-Based Collaborative Filtering to help students choose the most suitable courses.',
    mainImage: '/assets/img/projects/rs/banner-rs.webp',

    problem: {
      statement:
        "University students often struggle to select the most suitable elective courses due to lack of insights about course difficulty, relevance, and similarity to their academic interests.",
      image: '/assets/img/projects/rs/rs1.webp',
    },

    solution: {
      description:
        "This project solves that issue using an intelligent elective course recommendation system powered by Item-Based Collaborative Filtering. It analyzes historical student enrollment data and course similarity metrics to suggest optimal electives for each student.",
      steps: [
        {
          id: 1,
          title: 'Data Collection',
          description:
            'Historical student-course enrollment data is processed to identify relationships between elective courses.',
          icon: 'fas fa-database',
        },
        {
          id: 2,
          title: 'Similarity Computation',
          description:
            'Cosine similarity is calculated to measure how closely related two courses are, based on shared enrollment patterns.',
          icon: 'fas fa-project-diagram',
        },
        {
          id: 3,
          title: 'Course Recommendation',
          description:
            'The system suggests top-N elective courses most similar to those taken by the student, ensuring personalized and data-driven recommendations.',
          icon: 'fas fa-robot',
        },
      ],
    },

    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Bootstrap',
      'JS',
      'CSS',
      'Pickle',
      'Firebase',
    ],

    gallery: [
      '/assets/img/projects/rs/rs2.webp',
      '/assets/img/projects/rs/rs4.webp',
      '/assets/img/projects/rs/rs3.webp',
      '/assets/img/projects/rs/rs5.webp',
    ],

    liveLink: null,
    repoLink: 'https://github.com/abdulrahmanhamdi/OBS_System',
  },

  // === PROJECT 2 ===
  {
    id: 'ssob-website',
    title: 'SSOB Website – Syrian Students Organization in Sivas',
    category: 'Web Development / Community Website',
    year: 2024,
    summary:
      'Official static multilingual website for the Syrian Students Organization in Sivas (SSOB).',
    mainImage: '/assets/img/projects/ssob/ssob-banner.png',

    problem: {
      statement:
        'The Syrian Students Organization in Sivas (SSOB) needed an official online presence to present its activities, university resources, and serve as a hub for international students.',
      image: '/assets/img/projects/ssob/ssob1.png',
    },

    solution: {
      description:
        'A fully static multilingual website developed using HTML, CSS, Bootstrap, and jQuery. The site showcases SSOB’s events, board members, university faculties, and helpful resources for foreign students. It is hosted on Firebase for fast global access.',
      steps: [
        {
          id: 1,
          title: 'Frontend Design',
          description:
            'Built responsive pages using Bootstrap grid and custom CSS for an elegant and mobile-friendly layout.',
          icon: 'fas fa-laptop-code',
        },
        {
          id: 2,
          title: 'Dynamic UI Interactions',
          description:
            'Integrated jQuery animations, scroll effects, and Flexslider for a modern user experience.',
          icon: 'fas fa-magic',
        },
        {
          id: 3,
          title: 'Deployment & Hosting',
          description:
            'Deployed the static site securely to Firebase Hosting with HTTPS and CDN optimization.',
          icon: 'fas fa-cloud-upload-alt',
        },
      ],
    },

    technologies: [
      'HTML5',
      'CSS3',
      'Bootstrap',
      'JavaScript',
      'jQuery',
      'Flexslider',
      'scrollReveal.js',
      'Font Awesome',
      'Firebase Hosting',
    ],

    gallery: [
      '/assets/img/projects/ssob/ssob2.png',
      '/assets/img/projects/ssob/ssob3.png',
    ],

    liveLink: 'https://ssob-9027f.web.app',
    repoLink: null,
  },

  // === PROJECT 3 ===
  {
    id: 'image-deblur',
    title: 'CNN-Based Image Deblurring using Defocused Blur Dataset',
    category: 'AI / Computer Vision',
    year: 2025,
    summary:
      'A lightweight CNN autoencoder trained on the Defocused Blur Dataset to restore sharpness in defocused images, achieving 15.3 dB PSNR and 0.39 SSIM.',
    mainImage: '/assets/img/projects/cnn-deblurring/image-deblur-banner.png',

    problem: {
      statement:
        "Blurry or defocused images are a persistent problem in photography, surveillance, and computer vision systems. Traditional deblurring methods fail to capture the complex non-linear distortions introduced by camera shake or defocus, resulting in loss of texture and spatial detail. There was a need for a lightweight learning-based solution capable of restoring sharpness effectively without requiring heavy computational resources.",
      image: '/assets/img/projects/cnn-deblurring/problem.png',
    },

    solution: {
      description:
        "To address this challenge, a CNN-based autoencoder architecture was developed to perform single-image deblurring. The network consists of 3 convolutional encoder layers and 5 decoder (Conv2DTranspose) layers, forming a symmetric structure that reconstructs clear images from defocused inputs. The model was trained on the Defocused Blur Dataset from Kaggle using MSE loss, PSNR, and SSIM metrics. It achieved a validation loss of 0.0379 and PSNR of 15.3 dB, demonstrating promising results in restoring spatial structure while maintaining computational efficiency.",
      steps: [
        {
          id: 1,
          title: 'Dataset Preparation',
          description:
            'Collected and preprocessed paired blurred and sharp images from the Defocused Blur Dataset. All samples were resized to 224x224 and normalized.',
          icon: 'fas fa-images',
        },
        {
          id: 2,
          title: 'Model Architecture',
          description:
            'Implemented a 7-layer CNN autoencoder using TensorFlow. Downsampling was achieved with Conv2D and LeakyReLU activations, while upsampling used Conv2DTranspose layers.',
          icon: 'fas fa-project-diagram',
        },
        {
          id: 3,
          title: 'Training & Optimization',
          description:
            'Trained the model for 70 epochs with Adam optimizer and dynamic learning rate adjustment via ReduceLROnPlateau. Evaluated using PSNR and SSIM metrics.',
          icon: 'fas fa-brain',
        },
      ],
    },

    architecture: {
      summary:
        "A symmetric convolutional autoencoder network with 3 encoder and 5 decoder layers. Uses LeakyReLU activations and 1.3M total parameters.",
      layers: [
        "3 × Conv2D (Encoder) with filters 64 → 128 → 256",
        "5 × Conv2DTranspose (Decoder) with filters 256 → 128 → 64 → 32 → 3",
        "LeakyReLU activations for non-linearity",
        "MSE loss, Adam optimizer, ReduceLROnPlateau scheduler",
      ],
    },

    dataset: {
      source: 'Kaggle – kwentar/blur-dataset',
      structure: [
        'defocused_blurred/ : blurred input images',
        'sharp/ : ground truth sharp images',
      ],
      size: '216 paired images',
      split: '80% train, 10% validation, 10% test',
      imageSize: '224x224 pixels',
    },

    training: {
      parameters: {
        epochs: 70,
        batchSize: 32,
        optimizer: 'Adam',
        lossFunction: 'Mean Squared Error (MSE)',
        metrics: ['PSNR', 'SSIM'],
        learningRate: 'Adaptive (ReduceLROnPlateau)',
        framework: 'TensorFlow 2.x',
        environment: 'Google Colab GPU',
      },
    },

    results: {
      metrics: {
        trainingLoss: '~0.0353',
        validationLoss: '~0.0379',
        PSNR: '15.3 dB',
        SSIM: '0.39',
      },
      observations: [
        'Model effectively reconstructs spatial structures but struggles with fine textures.',
        'Learning rate scheduling improved convergence and reduced oscillations.',
        'Performance is consistent across validation sets.',
      ],
    },

    futureWork: {
      improvements: [
        'Integrate perceptual (VGG-based) loss for better texture recovery.',
        'Adopt U-Net or ResNet-style encoders for deeper feature extraction.',
        'Add residual connections to preserve fine details.',
        'Fine-tune on motion-blurred datasets for generalization.',
        'Deploy model using TensorFlow Lite for mobile optimization.',
      ],
    },

    technologies: [
      'Python',
      'TensorFlow 2.x',
      'Keras',
      'NumPy',
      'Matplotlib',
      'Google Colab',
      'PSNR / SSIM Evaluation',
    ],

    gallery: [
      '/assets/img/projects/cnn-deblurring/fire_extinguisher_example.png',
      '/assets/img/projects/cnn-deblurring/prediction_tv.png',
      '/assets/img/projects/cnn-deblurring/loss_curve.png',
    ],

    liveLink: null,
    repoLink: 'https://github.com/abdulrahmanhamdi/CNN-Based-Image-Deblurring-using-Defocused-Blur-Dataset',
  },
  // === PROJECT 4 ===
{
  id: 'plant-disease-detection',
  title: 'Custom CNN-Based Plant Disease Detection',
  category: 'AI / Smart Agriculture',
  year: 2025,
  summary:
    'A lightweight custom CNN for plant disease detection trained on 70K+ leaf images across 38 classes, achieving 98.96% validation accuracy using PyTorch and OneCycleLR scheduling.',
  mainImage: '/assets/img/projects/plant-disease/banner-plant.png',

  problem: {
    statement:
      'Plant diseases cause massive agricultural and economic losses globally. Manual diagnosis requires expert knowledge and time, which is impractical for large farms or rural areas. There was a need for an automated, accurate, and lightweight system to detect plant diseases early using image-based AI models.',
    image: '/assets/img/projects/plant-disease/problem.png',
  },

  solution: {
    description:
      'A lightweight Convolutional Neural Network (CNN) was developed to classify plant leaf diseases efficiently. The model was trained on an augmented dataset of 70,000+ images spanning 38 classes. Using residual connections, batch normalization, and adaptive pooling, the model reached 98.96% validation accuracy in just 5 epochs, proving both speed and accuracy. Optimized with Adam optimizer, OneCycleLR scheduling, and cross-entropy loss, it offers strong generalization while remaining suitable for mobile deployment.',
    steps: [
      {
        id: 1,
        title: 'Dataset Preparation',
        description:
          'Collected and augmented plant leaf images from Kaggle dataset by vipoooool. Resized to 128x128, normalized, and split into train/validation/test sets.',
        icon: 'fas fa-seedling',
      },
      {
        id: 2,
        title: 'Model Design',
        description:
          'Designed a custom CNN with residual connections, batch normalization, and adaptive pooling layers for better stability and learning efficiency.',
        icon: 'fas fa-brain',
      },
      {
        id: 3,
        title: 'Training & Optimization',
        description:
          'Trained using Adam optimizer, OneCycleLR scheduling, and cross-entropy loss over 5 epochs in Google Colab GPU environment.',
        icon: 'fas fa-microchip',
      },
    ],
  },

  architecture: {
    summary:
      'Custom CNN architecture with convolutional, batch normalization, residual, and pooling layers designed for high performance on agricultural imagery.',
    layers: [
      'Conv2D + BatchNorm + ReLU blocks for feature extraction',
      'Residual skip connections to improve gradient flow',
      'MaxPooling + AdaptiveAvgPooling for downsampling',
      'Fully connected dense layer for 38-class classification',
      'Softmax output activation for multi-class probabilities',
    ],
  },

  dataset: {
    source: 'Kaggle – vipoooool / New Plant Diseases Dataset',
    structure: [
      'Train folder: ~70,000 augmented images (38 classes)',
      'Validation folder: ~17,000 images',
      'Test folder: 33 manually selected unseen images',
    ],
    size: '~87,000 total images (augmented)',
    split: '80% training / 20% validation',
    imageSize: '128x128 pixels',
  },

  training: {
    parameters: {
      epochs: 5,
      batchSize: 16,
      optimizer: 'Adam',
      learningRate: '0.01 with OneCycleLR Scheduler',
      lossFunction: 'Cross Entropy Loss',
      framework: 'PyTorch',
      hardware: 'Google Colab GPU',
    },
  },

  results: {
    metrics: {
      validationAccuracy: '98.96%',
      trainingLoss: '0.0537',
      validationLoss: '0.0343',
    },
    observations: [
      'Achieved high accuracy within only 5 epochs due to efficient architecture.',
      'OneCycleLR scheduling enabled fast convergence after early instability.',
      'Residual connections prevented overfitting and enhanced feature learning.',
      'Model generalized well to unseen test samples.',
    ],
  },

  futureWork: {
    improvements: [
      'Integrate Grad-CAM for model interpretability.',
      'Deploy on mobile devices and drones for real-time leaf scanning.',
      'Add pest recognition alongside disease classification.',
      'Incorporate multispectral and sensor data for richer diagnostics.',
      'Compress model using pruning and quantization for edge deployment.',
    ],
  },

  technologies: [
    'Python',
    'PyTorch',
    'NumPy',
    'Matplotlib',
    'TorchVision',
    'Google Colab',
    'OneCycleLR',
    'Cross Entropy Loss',
    'Batch Normalization',
  ],

  gallery: [
    '/assets/img/projects/plant-disease/class_distribution.png',
    '/assets/img/projects/plant-disease/loss_curve.png',
    '/assets/img/projects/plant-disease/accuracy_curve.png',
    '/assets/img/projects/plant-disease/sample_prediction.png',
  ],

  liveLink: null,
  repoLink: 'https://github.com/abdulrahmanhamdi/Custom-CNN-Plant-Disease-Detection',
},
// === PROJECT 5 ===
{
  id: 'fire-smoke-detection',
  title: 'Object Detection of Fire and Smoke Using Deep Learning',
  category: 'AI / Computer Vision / Safety Systems',
  year: 2025,
  summary:
    'A deep learning-based real-time fire and smoke detection system using YOLOv11, YOLOv5, and Faster R-CNN models trained on 21,527 labeled images. Achieved best performance with YOLOv11 (mAP@0.5 = 0.606, F1 = 0.61, 50 FPS).',
  mainImage: '/assets/img/projects/fire-detection/banner-fire.png',

  problem: {
    statement:
      'Fires pose serious threats to human life and property. Traditional sensor-based fire detection systems often suffer from delayed responses, high costs, and limited detection range. This study aims to develop a fast, accurate, and scalable deep learning-based system capable of detecting fire and smoke in real time using computer vision.',
    image: '/assets/img/projects/fire-detection/problem.png',
  },

  solution: {
    description:
      'A real-time fire and smoke detection system was developed using YOLOv11, YOLOv5, and Faster R-CNN architectures. The system was trained on the Kaggle “Smoke and Fire Detection YOLO Dataset” containing 21,527 labeled images across four classes: fire, smoke, both, and background. YOLOv11 achieved the best trade-off between accuracy and speed, reaching mAP@0.5 = 0.606 and 50 FPS. Visualizations such as confusion matrices, precision-recall curves, and detection samples demonstrated the model’s robustness for real-world use.',
    steps: [
      {
        id: 1,
        title: 'Dataset Preparation',
        description:
          'Used the open-source “Smoke and Fire Detection YOLO Dataset” by Sayed Gamal from Kaggle. Dataset included pre-labeled bounding boxes for 21,527 images across four classes.',
        icon: 'fas fa-database',
      },
      {
        id: 2,
        title: 'Model Training',
        description:
          'Trained YOLOv5, YOLOv11, and Faster R-CNN using Google Colab (Tesla T4 GPU) for 100 epochs with input size 640x640. YOLOv11 employed anchor-free detection and DFL loss for better precision.',
        icon: 'fas fa-brain',
      },
      {
        id: 3,
        title: 'Evaluation & Comparison',
        description:
          'Performance evaluated using mAP@0.5, F1-score, precision, and FPS metrics. YOLOv11 showed the best overall performance with 0.606 mAP@0.5, 0.61 F1-score, and 50 FPS.',
        icon: 'fas fa-chart-line',
      },
    ],
  },

  architecture: {
    summary:
      'Comparison of three deep learning object detection models — YOLOv5, YOLOv11, and Faster R-CNN — for fire and smoke detection. YOLOv11 achieved the best balance between speed and accuracy.',
    layers: [
      'YOLOv5: Anchor-based detection (~7M parameters, 45 FPS)',
      'YOLOv11: Anchor-free detection (~48M parameters, 50 FPS, CIoU + DFL loss)',
      'Faster R-CNN: Region-based detection with RPN for high precision but slower inference (7 FPS)',
    ],
  },

  dataset: {
    source: 'Kaggle – Smoke and Fire Detection YOLO Dataset (by Sayed Gamal)',
    structure: [
      'Fire only: 1,164 images',
      'Smoke only: 5,867 images',
      'Fire and smoke: 4,658 images',
      'None (background): 9,838 images',
    ],
    size: '21,527 labeled images',
    split: 'Pre-labeled YOLO format',
    imageSize: '640x640 pixels',
  },

  training: {
    parameters: {
      epochs: 100,
      batchSize: 16,
      optimizer: 'SGD (Adaptive Learning Rate)',
      lossFunction: 'CIoU + Class Loss + DFL',
      framework: 'PyTorch + Ultralytics YOLO',
      hardware: 'Google Colab (Tesla T4 GPU)',
    },
  },

  results: {
    metrics: {
      'YOLOv5': 'mAP@0.5: 0.578 | F1: 0.59 | Precision: 0.62 | 45 FPS',
      'YOLOv11': 'mAP@0.5: 0.606 | F1: 0.61 | Precision: 0.63 | 50 FPS',
      'Faster R-CNN': 'mAP@0.5: 0.521 | F1: 0.53 | Precision: 0.59 | 7 FPS',
    },
    observations: [
      'YOLOv11 achieved the highest mAP and F1 score, making it ideal for real-time fire monitoring.',
      'YOLOv5 remained efficient with high speed (45 FPS) and stable detection performance.',
      'Faster R-CNN offered higher precision but slower inference, suitable for offline or high-accuracy scenarios.',
      'Smoke detection achieved higher success rates (64.3%) than fire detection (56.9%).',
    ],
  },

  futureWork: {
    improvements: [
      'Integrate attention mechanisms (e.g., CBAM) and transformer-based models (DETR) to enhance detection in low-visibility conditions.',
      'Expand dataset with diverse environments (night/day, wind, varying resolutions).',
      'Utilize temporal data from video streams to reduce false positives.',
      'Deploy YOLOv11 models on edge devices for drone and UAV monitoring.',
      'Optimize inference efficiency for embedded real-time systems.',
    ],
  },

  technologies: [
    'Python 3.11',
    'PyTorch',
    'Ultralytics YOLOv11',
    'YOLOv5',
    'Faster R-CNN',
    'OpenCV',
    'Matplotlib',
    'Seaborn',
    'Google Colab (Tesla T4 GPU)',
  ],

  gallery: [
    '/assets/img/projects/fire-detection/yolov11_comparison.png',
    '/assets/img/projects/fire-detection/loss_curve.png',
    '/assets/img/projects/fire-detection/indoor_detection.png',
    '/assets/img/projects/fire-detection/outdoor_detection.png',
  ],

  liveLink: null,
  repoLink: 'https://github.com/abdulrahmanhamdi/Object-Detection-of-Fire-and-Smoke',
},
// === PROJECT 6 ===
{
  id: 'vehicle-detection-yolov11',
  title: 'Vehicle Detection with YOLOv11',
  category: 'AI / Computer Vision / Intelligent Transportation',
  year: 2025,
  summary:
    'A real-time vehicle detection and classification system using YOLOv11 trained on a custom dataset (Cars, Buses, Ambulances, Motorcycles, Trucks). Achieved 87% mAP and 89% precision on test set.',
  mainImage: '/assets/img/projects/vehicle-detection/banner-vehicle.png',

  problem: {
    statement:
      'Traffic monitoring and smart transportation systems require accurate and real-time vehicle detection. Traditional methods are often limited by environmental conditions and processing speed. This project aims to build an accurate, efficient, and scalable vehicle detection model using the YOLOv11 architecture for various vehicle types.',
    image: '/assets/img/projects/vehicle-detection/problem.png',
  },

  solution: {
    description:
      'A custom YOLOv11 model was trained to detect and classify vehicles such as cars, buses, ambulances, motorcycles, and trucks using the Kaggle Vehicle Detection dataset by Alkan Erturan. The system leverages YOLOv11’s anchor-free structure and advanced optimization techniques to achieve high accuracy in real-time inference. Trained for 100 epochs using AdamW optimizer and 640×640 input size, it outperformed YOLOv8n by +4% mAP improvement.',
    steps: [
      {
        id: 1,
        title: 'Dataset Collection & Labeling',
        description:
          'Used Alkan Erturan’s Kaggle dataset containing annotated vehicle images in YOLOv8 format. Adapted dataset for YOLOv11 and structured into train, validation, and test splits.',
        icon: 'fas fa-database',
      },
      {
        id: 2,
        title: 'Model Training',
        description:
          'Trained YOLOv11n (nano) for 100 epochs on Google Colab (Tesla T4 GPU) using AdamW optimizer and batch size 16. Implemented OneCycleLR for dynamic learning rate adjustment.',
        icon: 'fas fa-brain',
      },
      {
        id: 3,
        title: 'Performance Evaluation',
        description:
          'Compared YOLOv11n vs YOLOv8n models. YOLOv11 achieved 87% mAP50, 89% precision, and 85% recall. Results validated via confusion matrices and performance curves.',
        icon: 'fas fa-chart-line',
      },
    ],
  },

  architecture: {
    summary:
      'YOLOv11-based vehicle detection system trained on 5 vehicle classes with enhanced accuracy and generalization using PyTorch and Ultralytics.',
    layers: [
      'YOLOv11n model (nano) with CSPDarkNet backbone',
      'Anchor-free detection and decoupled head for multi-class recognition',
      'Loss: Objectness + Classification + Bounding Box regression',
      'Optimizer: AdamW with OneCycleLR scheduler',
      'Input size: 640×640 pixels',
    ],
  },

  dataset: {
    source: 'Kaggle – Vehicle Detection Dataset by Alkan Erturan',
    structure: [
      'Train set: annotated vehicle images (Cars, Buses, Ambulances, Motorcycles, Trucks)',
      'Validation set for performance evaluation',
      'Test set includes both images and a traffic video clip',
    ],
    size: '~10,000+ annotated images + 1 evaluation video',
    split: '70% training / 20% validation / 10% testing',
    imageSize: '640×640 pixels',
  },

  training: {
    parameters: {
      epochs: 100,
      batchSize: 16,
      optimizer: 'AdamW',
      learningRate: 'Dynamic (OneCycleLR)',
      lossFunction: 'Objectness + Classification + Box regression',
      framework: 'PyTorch (Ultralytics YOLOv11)',
      hardware: 'Google Colab (Tesla T4 GPU)',
    },
  },

  results: {
    metrics: {
      YOLOv8n: 'mAP50: 83% | Precision: 86% | Recall: 81%',
      YOLOv11n: 'mAP50: 87% | Precision: 89% | Recall: 85%',
    },
    observations: [
      'YOLOv11n achieved +4% mAP improvement over YOLOv8n.',
      'Excellent precision and recall balance suitable for traffic monitoring.',
      'Model performed reliably across varying lighting and vehicle types.',
      'Visualization outputs confirm accurate bounding box placement.',
    ],
  },

  futureWork: {
    improvements: [
      'Fine-tune larger YOLOv11 models (yolo11s.pt, yolo11m.pt).',
      'Expand dataset to include nighttime and weather variations.',
      'Deploy model on embedded systems like Jetson Nano and Coral TPU.',
      'Integrate object tracking (DeepSORT, ByteTrack) for vehicle movement analysis.',
      'Develop a real-time traffic analysis dashboard using OpenCV.',
    ],
  },

  technologies: [
    'Python 3.11',
    'PyTorch',
    'Ultralytics YOLOv11',
    'Matplotlib',
    'Seaborn',
    'OpenCV',
    'Google Colab',
  ],

  gallery: [
    '/assets/img/projects/vehicle-detection/labels_summary.jpg',
    '/assets/img/projects/vehicle-detection/confusion_matrix.png',
    '/assets/img/projects/vehicle-detection/BoxPR_curve.png',
    '/assets/img/projects/vehicle-detection/ODV.png',
  ],

  liveLink: null,
  repoLink: 'https://github.com/abdulrahmanhamdi/Vehicle-Detection-YOLOv11',
},
// === PROJECT 7 ===
{
  id: 'smart-stats-analyzer',
  title: 'Smart Stats Analyzer',
  category: 'Data Science / Desktop Application',
  year: 2025,
  summary:
    'A Python-based statistical analysis desktop app built with CustomTkinter for students, analysts, and educators. Supports CSV/Excel/JSON input, auto-statistics, visualizations, and PDF/Excel export.',
  mainImage: '/assets/img/projects/smart-stats/dashboard.png',

  problem: {
    statement:
      'Many students and analysts struggle to compute and visualize statistical measures quickly without coding or complex software. There was a need for a lightweight, intuitive desktop app to perform descriptive statistics and visual analysis instantly.',
    image: '/assets/img/projects/smart-stats/problem.png',
  },

  solution: {
    description:
      'Smart Stats Analyzer is a modern CustomTkinter desktop application that performs real-time statistical analysis on numeric datasets. It automatically calculates descriptive statistics (mean, median, mode, variance, standard deviation, range), tests for normality using the Shapiro–Wilk test, and visualizes results through histograms, boxplots, and pie charts. The app supports importing `.csv`, `.xlsx`, `.json`, and `.txt` files and exporting complete reports to PDF or Excel. It also features light/dark themes, smart reset, and auto-save capabilities.',
    steps: [
      {
        id: 1,
        title: 'Data Input',
        description:
          'Users can enter numbers manually or import datasets from CSV, Excel, JSON, or TXT files. The system instantly parses and validates data.',
        icon: 'fas fa-file-import',
      },
      {
        id: 2,
        title: 'Statistical Computation',
        description:
          'Automatically computes central tendency and dispersion measures, performs Shapiro–Wilk normality tests, and generates frequency distributions.',
        icon: 'fas fa-calculator',
      },
      {
        id: 3,
        title: 'Visualization & Export',
        description:
          'Creates real-time graphs (Histogram, Boxplot, Pie Chart) and allows exporting full analysis reports to PDF or Excel with one click.',
        icon: 'fas fa-chart-pie',
      },
    ],
  },

  architecture: {
    summary:
      'Modular Python GUI architecture using CustomTkinter for interface, Pandas + SciPy for computation, and Matplotlib for visualization.',
    layers: [
      'Frontend: CustomTkinter-based multi-tab interface (Dashboard, Graphs, About)',
      'Computation: Pandas + NumPy for descriptive stats and frequency analysis',
      'Statistical Tests: SciPy – Shapiro-Wilk for normality checking',
      'Visualization: Matplotlib for histograms, boxplots, and pie charts',
      'Reporting: FPDF + OpenPyXL for PDF and Excel exports',
    ],
  },

  dataset: {
    source: 'User-provided numeric data or external files',
    structure: [
      'Supports manual input (comma-separated numbers)',
      'Supports external files: .csv, .xlsx, .json, .txt',
    ],
    size: 'Variable user input',
    split: 'Interactive data entry – no fixed train/test structure',
    imageSize: 'N/A (GUI application)',
  },

  training: {
    parameters: {
      framework: 'Python 3.11+',
      guiLibrary: 'CustomTkinter',
      visualization: 'Matplotlib & Seaborn',
      dataProcessing: 'Pandas, NumPy, SciPy',
      reportExport: 'FPDF2, OpenPyXL',
      packaging: 'PyInstaller',
    },
  },

  results: {
    metrics: {
      'Performance': 'Instant computation and chart rendering for datasets up to 10 000 rows',
      'Usability': 'Simple interface accessible to non-programmers',
    },
    observations: [
      'App runs smoothly on Windows, macOS, and Linux.',
      'Auto-statistics and visualizations make data interpretation intuitive.',
      'PDF and Excel export features enhance report generation for students and professionals.',
    ],
  },

  futureWork: {
    improvements: [
      'Add correlation and regression analysis modules.',
      'Introduce multi-variable support and scatterplot matrix.',
      'Integrate cloud storage sync for saving analysis sessions.',
      'Add AI-based outlier detection and anomaly analysis.',
      'Publish cross-platform installer with auto-update feature.',
    ],
  },

  technologies: [
    'Python 3.11+',
    'CustomTkinter',
    'Matplotlib',
    'Seaborn',
    'Pandas',
    'NumPy',
    'SciPy',
    'FPDF',
    'OpenPyXL',
    'PyInstaller',
  ],

  gallery: [
    '/assets/img/projects/smart-stats/dashboard.png',
    '/assets/img/projects/smart-stats/boxplot.png',
    '/assets/img/projects/smart-stats/about.png',
  ],

  liveLink: null,
  repoLink: 'https://github.com/abdulrahmanhamdi/Smart-Stats-Analyzer',
},
// === PROJECT 8 ===
{
  id: 'swin-unetr-btcv',
  title: 'Swin UNETR — BTCV Multi-Organ 3D Segmentation (Pretrained + Custom Upgrades)',
  category: 'AI / Medical Imaging / 3D Segmentation',
  year: 2025,
  summary:
    'An upgraded 3D abdominal CT multi-organ segmentation pipeline built on MONAI’s pretrained Swin UNETR (BTCV). Includes volumetry CSV export, morphometrics, and visualization utilities optimized for Kaggle and Colab workflows.',
  mainImage: '/assets/img/projects/swin-unetr/3d_overview.png',

  problem: {
    statement:
      'Accurate multi-organ segmentation in abdominal CT scans is a core challenge in medical imaging. While pretrained 3D models like MONAI’s Swin UNETR provide strong baselines, practical pipelines for inference, volumetry, and morphometrics are often lacking. This project bridges that gap with a customized and reproducible research-ready solution.',
    image: '/assets/img/projects/swin-unetr/problem.png',
  },

  solution: {
    description:
      'Built upon the pretrained MONAI Swin UNETR model (BTCV bundle, NVIDIA NGC), this project introduces multiple upgrades for applied segmentation and volumetric analysis. It enables automatic 3D organ segmentation, per-organ volumetry export (CSV), and morphometric computation (surface area, Hausdorff distance, surface Dice). Visualization utilities are included for both 2D slices and 3D reconstructions. The pipeline runs seamlessly on Kaggle and Google Colab with optimized inference configurations and TensorRT acceleration options.',
    steps: [
      {
        id: 1,
        title: 'Custom Inference Configuration',
        description:
          'Introduced configs/inference_custom.json for simplified use in Kaggle/Colab environments, supporting custom paths and GPU acceleration.',
        icon: 'fas fa-cogs',
      },
      {
        id: 2,
        title: 'Volumetry Pipeline',
        description:
          'Added btcv-3d-volume-pipeline.py script to compute per-organ volumes (mm³/mL) using voxel spacing and export results to CSV.',
        icon: 'fas fa-file-csv',
      },
      {
        id: 3,
        title: 'Morphometrics & Visualization',
        description:
          'Developed btcv_morphometrics.py for advanced geometric metrics like surface area, surface Dice, Hausdorff95, and sphericity, plus 2D/3D visualization utilities.',
        icon: 'fas fa-cube',
      },
    ],
  },

  architecture: {
    summary:
      'Pretrained Swin UNETR 3D segmentation model from MONAI with added post-processing and volumetric analysis modules.',
    layers: [
      'Base Model: monai_swin_unetr_btcv_segmentation (pretrained on BTCV)',
      'Encoder: Swin Transformer blocks for multi-scale 3D feature extraction',
      'Decoder: UNETR-style upsampling with skip connections',
      'Custom Additions: volumetry, morphometrics, visualization scripts',
      'Optional acceleration: TensorRT and torch-tensorrt for deployment',
    ],
  },

  dataset: {
    source: 'BTCV (Beyond the Cranial Vault) multi-organ CT dataset',
    structure: [
      'imagesTr/ — Training CT scans',
      'labelsTr/ — Ground-truth segmentation masks',
      'imagesTs/ — Test images for inference',
    ],
    size: '~50 CT volumes with 14 organ classes',
    split: 'Standard BTCV split (train/test)',
    imageSize: '3D patches, typically 96×96×96 voxels',
  },

  training: {
    parameters: {
      pretrainedBundle: 'monai_swin_unetr_btcv_segmentation (NGC)',
      pythonVersion: '3.9–3.11',
      framework: 'PyTorch + MONAI 1.3.0',
      hardware: 'Google Colab / Kaggle GPU (T4 / A100)',
      inferenceConfig: 'configs/inference_custom.json',
      lossFunction: 'Dice + Cross Entropy (bundle default)',
      optimizer: 'AdamW (pretrained weights used for inference)',
    },
  },

  results: {
    metrics: {
      dataset: 'BTCV Multi-Organ Segmentation (14 labels)',
      bestPerformance: 'Accurate per-organ segmentation with volumetry precision under 2% relative error (compared to MONAI baseline).',
      volumetryOutput: 'CSV files containing per-organ volumes (mm³ / mL) per case.',
    },
    observations: [
      '3D Swin UNETR delivered strong segmentation accuracy with pretrained weights.',
      'Custom volumetry pipeline provided quantitative organ measurements.',
      'Morphometrics script successfully computed Hausdorff95, surface Dice, and surface area.',
      'Visualization scripts enabled fast validation in 2D/3D within Colab/Kaggle environments.',
    ],
  },

  futureWork: {
    improvements: [
      'Integrate semi-supervised fine-tuning with additional abdominal datasets (e.g., Synapse).',
      'Develop lightweight Swin UNETR-Tiny variant for faster inference.',
      'Add MONAI Label integration for clinical annotation workflows.',
      'Combine volumetry outputs with AI-based pathology detection modules.',
      'Export complete analysis pipeline as a MONAI App Bundle for NGC.',
    ],
  },

  technologies: [
    'Python 3.9–3.11',
    'PyTorch',
    'MONAI 1.3.0',
    'Swin UNETR',
    'TensorRT',
    'Torch-TensorRT',
    'Nibabel',
    'NumPy',
    'SciPy',
    'scikit-image',
    'Matplotlib',
    'Plotly',
  ],

  gallery: [
    '/assets/img/projects/swin-unetr/0.png',
    '/assets/img/projects/swin-unetr/1.png',
    '/assets/img/projects/swin-unetr/2.png',
    '/assets/img/projects/swin-unetr/7.png',
  ],

  liveLink: null,
  repoLink: 'https://github.com/abdulrahmanhamdi/Swin-UNETR-BTCV-Multi-Organ-3D-Segmentation',
},
// === PROJECT 9 ===
{
  id: 'smart-parking-sensor',
  title: 'Smart Parking Sensor System (Raspberry Pi 5 + HC-SR04)',
  category: 'IoT / Embedded Systems / Automation',
  year: 2024,
  summary:
    'An intelligent parking assistance system using Raspberry Pi 4 & 5, ultrasonic distance sensing, multicolor LEDs, and buzzer alerts for real-time parking guidance.',
  mainImage: '/assets/img/projects/smart-parking/main.png',

  problem: {
    statement:
      'In low-visibility parking conditions, drivers often struggle to gauge safe distances, leading to vehicle or wall collisions. Traditional parking sensors are expensive or unavailable in low-budget vehicles. This project aims to design a low-cost, Raspberry Pi-based smart parking sensor that provides both visual and auditory feedback for safer parking.',
    image: '/assets/img/projects/smart-parking/problem.png',
  },

  solution: {
    description:
      'The Smart Parking Sensor System measures the distance between the vehicle and nearby obstacles using an ultrasonic sensor (HC-SR04). The Raspberry Pi 5 processes the readings and drives color LEDs and a buzzer according to distance thresholds. The system alerts the driver with green, yellow, and red lights combined with sound patterns to indicate proximity levels. It is suitable for garages, campuses, or public parking zones as a reliable and energy-efficient assistance tool.',
    steps: [
      {
        id: 1,
        title: 'Hardware Setup',
        description:
          'Connected Raspberry Pi 5 (8 GB) and Pi 4 (4 GB) to HC-SR04 ultrasonic sensor, LEDs (R/Y/G), and buzzer on a perforated board using jumper wires and resistors.',
        icon: 'fas fa-microchip',
      },
      {
        id: 2,
        title: 'Electronic Design',
        description:
          'Defined GPIO mappings: TRIG (14), ECHO (18), GREEN (17), YELLOW (27), RED (22), BUZZER (23). Implemented power management and test circuits on a breadboard.',
        icon: 'fas fa-bolt',
      },
      {
        id: 3,
        title: 'Software Logic',
        description:
          'Used gpiod library for Raspberry Pi 5 and RPi.GPIO for Pi 4 to control GPIO pins. Measured distance, mapped values to LED/buzzer patterns: Green (> 25 cm), Yellow (10–25 cm), Red (< 10 cm).',
        icon: 'fas fa-code',
      },
    ],
  },

  architecture: {
    summary:
      'Embedded IoT architecture combining Raspberry Pi, ultrasonic sensing, and LED + audio feedback for distance-based guidance.',
    layers: [
      'Microcontroller: Raspberry Pi 5 (8 GB) and Pi 4 (4 GB)',
      'Sensor: HC-SR04 Ultrasonic Distance Sensor',
      'Indicators: RGB LEDs (traffic-light style) + Active Buzzer',
      'Software Libraries: gpiod / RPi.GPIO / time modules',
      'Power Management + breadboard prototyping circuit',
    ],
  },

  dataset: {
    source: 'Real-time sensor readings from ultrasonic module (no external dataset)',
    structure: [
      'Live data acquired via HC-SR04 sensor distance measurements',
      'Outputs mapped to visual (LED) and audible (Buzzer) signals',
    ],
    size: 'Continuous stream (2–400 cm range)',
    split: 'Real-time inference loop',
    imageSize: 'N/A (embedded sensor system)',
  },

  training: {
    parameters: {
      programmingLanguage: 'Python 3',
      platform: 'Raspberry Pi OS / Linux ARM',
      libraries: 'gpiod (for Pi 5), RPi.GPIO (for Pi 4), time',
      sensors: 'HC-SR04 Ultrasonic, LEDs, Buzzer',
      hardware: 'Raspberry Pi 5 and Pi 4, SD card, Breadboard, Resistors, Jumper Cables',
    },
  },

  results: {
    metrics: {
      distanceAccuracy: '±3 mm within 2–400 cm range',
      reactionDelay: '< 2 ms sensor response time',
      powerConsumption: '≈ 5 V DC @ 30 mA avg',
    },
    observations: [
      'System reliably detects obstacles and switches LED states with minimal latency.',
      'Buzzer patterns help drivers recognize critical distance zones instantly.',
      'Successfully tested in parking simulation and small vehicle prototype.',
    ],
  },

  futureWork: {
    improvements: [
      'Add energy-saving mode to disable LEDs when idle.',
      'Integrate ultrasonic array for side and front detection.',
      'Develop mobile app interface for Bluetooth status feedback.',
      'Include haptic feedback or LCD display for drivers.',
      'Optimize mounting and waterproof housing for outdoor use.',
    ],
  },

  technologies: [
    'Raspberry Pi 5 / 4',
    'Python 3',
    'HC-SR04 Ultrasonic Sensor',
    'LED Modules (G/Y/R)',
    'Active Buzzer',
    'gpiod / RPi.GPIO Library',
    'Breadboard Prototyping',
    'Proteus Simulation',
  ],

  gallery: [
    '/assets/img/projects/smart-parking/system-diagram.png',
    '/assets/img/projects/smart-parking/circuit.png',
    '/assets/img/projects/smart-parking/code.png',
    '/assets/img/projects/smart-parking/demo.png',
  ],

  liveLink: null,
  repoLink: 'https://github.com/abdulrahmanhamdi/Smart-Parking-Sensor-System',
},


];
