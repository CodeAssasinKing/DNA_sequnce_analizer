// Validate DNA sequence input
document.getElementById('analyzeBtn').addEventListener('click', function() {
    const sequence = document.getElementById('sequenceInput').value.toUpperCase();
    const validDNA = /^[ATCG]+$/;
    
    if (!validDNA.test(sequence)) {
        alert('Invalid DNA sequence. Please enter only A, T, C, G characters.');
        return;
    }
    
    analyzeDNA(sequence);
    displayColoredSequence(sequence);
});

// Validate real-time input
document.getElementById('sequenceInput').addEventListener('input', function() {
    const sequence = document.getElementById('sequenceInput').value.toUpperCase();
    const validDNA = /^[ATCG]*$/;
    
    if (!validDNA.test(sequence)) {
        document.getElementById('sequenceInput').style.borderColor = 'red';
    } else {
        document.getElementById('sequenceInput').style.borderColor = 'green';
    }
});

// Function to analyze DNA sequence
function analyzeDNA(sequence) {
    const aCount = (sequence.match(/A/g) || []).length;
    const tCount = (sequence.match(/T/g) || []).length;
    const cCount = (sequence.match(/C/g) || []).length;
    const gCount = (sequence.match(/G/g) || []).length;
    
    // Display counts
    document.getElementById('aCount').innerText = aCount;
    document.getElementById('tCount').innerText = tCount;
    document.getElementById('cCount').innerText = cCount;
    document.getElementById('gCount').innerText = gCount;

    // Calculate and display GC content
    const gcContent = calculateGCContent(sequence);
    document.getElementById('gcContent').innerText = gcContent + '%';
    
    // Display complementary strand and reverse complement
    const complement = getComplementaryStrand(sequence);
    document.getElementById('complementaryStrand').innerText = complement;
    document.getElementById('reverseComplement').innerText = complement.split('').reverse().join('');
}

// Function to calculate GC content
function calculateGCContent(sequence) {
    const gcCount = (sequence.match(/[GC]/g) || []).length;
    const gcPercentage = (gcCount / sequence.length) * 100;
    return gcPercentage.toFixed(2);
}

// Function to get complementary strand
function getComplementaryStrand(sequence) {
    return sequence.replace(/A/g, 'T')
                   .replace(/T/g, 'A')
                   .replace(/C/g, 'G')
                   .replace(/G/g, 'C');
}

// Function to display colored sequence
function displayColoredSequence(sequence) {
    const coloredSequence = sequence.replace(/A/g, '<span class="a">A</span>')
                                    .replace(/T/g, '<span class="t">T</span>')
                                    .replace(/C/g, '<span class="c">C</span>')
                                    .replace(/G/g, '<span class="g">G</span>');
    
    document.getElementById('sequenceDisplay').innerHTML = coloredSequence;
}

// Save sequence to localStorage
function saveSequence(sequence) {
    localStorage.setItem('savedSequence', sequence);
}

// Load sequence from localStorage
function loadSequence() {
    const savedSequence = localStorage.getItem('savedSequence');
    if (savedSequence) {
        document.getElementById('sequenceInput').value = savedSequence;
        analyzeDNA(savedSequence);
        displayColoredSequence(savedSequence);
    }
}

// Load saved sequence when the page is loaded
window.onload = loadSequence;

// Function to download DNA sequence as a text file
function downloadSequence(sequence) {
    const blob = new Blob([sequence], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dna_sequence.txt';
    link.click();
}

// File upload for DNA sequence
document.getElementById('dnaFile').addEventListener('change', function(event) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const dnaSequence = e.target.result.toUpperCase();
        document.getElementById('sequenceInput').value = dnaSequence;
        analyzeDNA(dnaSequence);
        displayColoredSequence(dnaSequence);
    };
    
    reader.readAsText(event.target.files[0]);
});

// Event listener for download button
document.getElementById('downloadBtn').addEventListener('click', function() {
    const sequence = document.getElementById('sequenceInput').value;
    downloadSequence(sequence);
});
// Validate DNA sequence input
document.getElementById('analyzeBtn').addEventListener('click', function() {
    const sequence = document.getElementById('sequenceInput').value.toUpperCase();
    const validDNA = /^[ATCG]+$/;
    
    if (!validDNA.test(sequence)) {
        alert('Invalid DNA sequence. Please enter only A, T, C, G characters.');
        return;
    }
    
    analyzeDNA(sequence);
    displayColoredSequence(sequence);
});

// Validate real-time input
document.getElementById('sequenceInput').addEventListener('input', function() {
    const sequence = document.getElementById('sequenceInput').value.toUpperCase();
    const validDNA = /^[ATCG]*$/;
    
    if (!validDNA.test(sequence)) {
        document.getElementById('sequenceInput').style.borderColor = 'red';
    } else {
        document.getElementById('sequenceInput').style.borderColor = 'green';
    }
});

// Function to analyze DNA sequence
function analyzeDNA(sequence) {
    const aCount = (sequence.match(/A/g) || []).length;
    const tCount = (sequence.match(/T/g) || []).length;
    const cCount = (sequence.match(/C/g) || []).length;
    const gCount = (sequence.match(/G/g) || []).length;
    
    // Display counts
    document.getElementById('aCount').innerText = aCount;
    document.getElementById('tCount').innerText = tCount;
    document.getElementById('cCount').innerText = cCount;
    document.getElementById('gCount').innerText = gCount;

    // Calculate and display GC content
    const gcContent = calculateGCContent(sequence);
    document.getElementById('gcContent').innerText = gcContent + '%';
    
    // Display complementary strand and reverse complement
    const complement = getComplementaryStrand(sequence);
    document.getElementById('complementaryStrand').innerText = complement;
    document.getElementById('reverseComplement').innerText = complement.split('').reverse().join('');
}

// Function to calculate GC content
function calculateGCContent(sequence) {
    const gcCount = (sequence.match(/[GC]/g) || []).length;
    const gcPercentage = (gcCount / sequence.length) * 100;
    return gcPercentage.toFixed(2);
}

// Function to get complementary strand
function getComplementaryStrand(sequence) {
    return sequence.replace(/A/g, 'T')
                   .replace(/T/g, 'A')
                   .replace(/C/g, 'G')
                   .replace(/G/g, 'C');
}

// Function to display colored sequence
function displayColoredSequence(sequence) {
    const coloredSequence = sequence.replace(/A/g, '<span class="a">A</span>')
                                    .replace(/T/g, '<span class="t">T</span>')
                                    .replace(/C/g, '<span class="c">C</span>')
                                    .replace(/G/g, '<span class="g">G</span>');
    
    document.getElementById('sequenceDisplay').innerHTML = coloredSequence;
}

// Save sequence to localStorage
function saveSequence(sequence) {
    localStorage.setItem('savedSequence', sequence);
}

// Load sequence from localStorage
function loadSequence() {
    const savedSequence = localStorage.getItem('savedSequence');
    if (savedSequence) {
        document.getElementById('sequenceInput').value = savedSequence;
        analyzeDNA(savedSequence);
        displayColoredSequence(savedSequence);
    }
}

// Load saved sequence when the page is loaded
window.onload = loadSequence;

// Function to download DNA sequence as a text file
function downloadSequence(sequence) {
    const blob = new Blob([sequence], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dna_sequence.txt';
    link.click();
}

// File upload for DNA sequence
document.getElementById('dnaFile').addEventListener('change', function(event) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const dnaSequence = e.target.result.toUpperCase();
        document.getElementById('sequenceInput').value = dnaSequence;
        analyzeDNA(dnaSequence);
        displayColoredSequence(dnaSequence);
    };
    
    reader.readAsText(event.target.files[0]);
});

        // Event listener for download button
        document.getElementById('downloadBtn').addEventListener('click', function() {
            const sequence = document.getElementById('sequenceInput').value;
            downloadSequence(sequence);
        });
        // New event with diagrams

        document.getElementById('analyzeBtn').addEventListener('click', () => {
            const sequence = document.getElementById('sequenceInput').value.toUpperCase();
            const counts = { A: 0, T: 0, G: 0, C: 0 };
        
            for (let i = 0; i < sequence.length; i++) {
                if (counts[sequence[i]] !== undefined) {
                    counts[sequence[i]]++;
                }
            }
        
            document.getElementById('aCount').textContent = counts.A;
            document.getElementById('tCount').textContent = counts.T;
            document.getElementById('gCount').textContent = counts.G;
            document.getElementById('cCount').textContent = counts.C;
        
            const ctx = document.getElementById('dna-chart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['A', 'T', 'G', 'C'],
                    datasets: [{
                        label: 'Nucleotide Count',
                        data: [counts.A, counts.T, counts.G, counts.C],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });