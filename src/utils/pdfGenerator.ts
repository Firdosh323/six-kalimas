
import jsPDF from 'jspdf';
import { kalimas } from '@/data/kalimas';

export const generateKalimasPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('6 Kalimas of Islam', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Complete Collection with Arabic Text, Transliteration & Translation', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 20;

  kalimas.forEach((kalima, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 80) {
      doc.addPage();
      yPosition = 20;
    }

    // Kalima Header
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(`${kalima.id}. ${kalima.name}`, 20, yPosition);
    yPosition += 8;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'italic');
    doc.text(kalima.title, 20, yPosition);
    yPosition += 15;

    // Arabic Text (using a larger font for better visibility)
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Arabic:', 20, yPosition);
    yPosition += 8;

    // Split Arabic text into multiple lines if too long
    const arabicLines = doc.splitTextToSize(kalima.arabic, pageWidth - 40);
    doc.setFont('helvetica', 'normal');
    arabicLines.forEach((line: string) => {
      doc.text(line, 20, yPosition, { align: 'left' });
      yPosition += 6;
    });
    yPosition += 5;

    // Transliteration
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Transliteration:', 20, yPosition);
    yPosition += 6;

    const transliterationLines = doc.splitTextToSize(kalima.transliteration, pageWidth - 40);
    doc.setFont('helvetica', 'italic');
    transliterationLines.forEach((line: string) => {
      doc.text(line, 20, yPosition);
      yPosition += 5;
    });
    yPosition += 5;

    // Translation
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Translation:', 20, yPosition);
    yPosition += 6;

    const translationLines = doc.splitTextToSize(`"${kalima.translation}"`, pageWidth - 40);
    doc.setFont('helvetica', 'normal');
    translationLines.forEach((line: string) => {
      doc.text(line, 20, yPosition);
      yPosition += 5;
    });
    yPosition += 5;

    // Meaning
    doc.setFont('helvetica', 'bold');
    doc.text('Meaning:', 20, yPosition);
    yPosition += 6;

    const meaningLines = doc.splitTextToSize(kalima.meaning, pageWidth - 40);
    doc.setFont('helvetica', 'normal');
    meaningLines.forEach((line: string) => {
      doc.text(line, 20, yPosition);
      yPosition += 5;
    });

    // Add separator line if not the last kalima
    if (index < kalimas.length - 1) {
      yPosition += 10;
      doc.setDrawColor(200, 200, 200);
      doc.line(20, yPosition, pageWidth - 20, yPosition);
      yPosition += 15;
    }
  });

  // Add footer on last page
  yPosition += 20;
  if (yPosition > pageHeight - 30) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('Generated from 6kalimas.com - Your Complete Guide to Islamic Kalimas', pageWidth / 2, yPosition, { align: 'center' });

  // Save the PDF
  doc.save('6-kalimas-complete-guide.pdf');
};
