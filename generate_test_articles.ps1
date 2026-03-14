$contentDir = "D:\hugo\TRAE\renqingshigu\content\posts"
$articleCount = 30

# Ensure directory exists
if (-not (Test-Path $contentDir)) {
    New-Item -Path $contentDir -ItemType Directory -Force
}

# Generate 30 articles
for ($i = 1; $i -le $articleCount; $i++) {
    $title = "Test Article $i"
    $date = Get-Date -Format "yyyy-MM-dd"
    
    # Generate content with approximately 1200 words
    $content = ""
    for ($j = 1; $j -le 100; $j++) {
        $content += "This is paragraph $j of test article $i. "
        $content += "Effective communication is key to success in the workplace. "
        $content += "Time management skills can significantly improve productivity. "
        $content += "Teamwork allows individuals to leverage their strengths. "
        $content += "Career planning helps clarify personal development direction. "
        $content += "A positive mindset can help overcome workplace challenges. "
        $content += "Continuous learning is essential for maintaining competitiveness. "
        $content += "Building a strong professional network is crucial for career growth. "
        $content += "Workplace etiquette reflects an individual's professional素养. "
        $content += "Effective stress management is important for workplace well-being. "
    }
    
    $frontMatter = "---
title: 'Test Article $i'
date: $date
description: 'This is test article $i, discussing various workplace issues.'
tags:
  - career
  - test
categories:
  - workplace
---
"
    
    $fullContent = $frontMatter + $content
    $fileName = "test-article-$i.md"
    $filePath = Join-Path $contentDir $fileName
    
    Set-Content -Path $filePath -Value $fullContent -Force
    Write-Host "Created article: $fileName"
}

Write-Host "\nGeneration complete! Created $articleCount test articles."
