import { Injectable } from '@angular/core';

/**
 * The AstmService handles parsing a high-level ASTM message
 * and converting it to low-level.
 */
@Injectable()
export class AstmService {

  /**
   * With the given ASTM message, convert it to
   * low-level spec returning an array of segments.
   * @param astm The ASTM message to convert to low-level.
   */
  getSegments(astm: string): string[] {
    const lines = this.parseIntoLines(astm);
    this.addLineNumbers(lines);
    this.addEndFrame(lines);
    this.addChecksum(lines);
    this.addBeginFrame(lines);
    this.addEndingCRLF(lines);

    return lines;
  }

  private parseIntoLines(astm: string): string[] {
    const lines: string[] = [];
    astm.split('\n').forEach(line => {
      lines.push(line);
    });

    return lines;
  }

  private addLineNumbers(lines: string[]): void {
    let lineNo = 1;
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      line = (lineNo % 8).toString() + line;
      lines[i] = line;

      lineNo++;
    }
  }

  private addEndFrame(lines: string[]): void {
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      line = line + '\r\x03';

      lines[i] = line;
    }
  }

  private addChecksum(lines: string[]): void {
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      let checksum = 0;
      for (let l = 0; l < line.length; l++) {
        checksum += line.charCodeAt(l);
      }

      let checksumStr = (checksum % 256)
        .toString(16)
        .toUpperCase();

      // pad checksumStr with leading 0 if single digit.
      if (checksumStr.length === 1) {
        checksumStr = '0' + checksumStr;
      }

      line = line + checksumStr;

      lines[i] = line;
    }
  }

  private addBeginFrame(lines: string[]): void {
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      line = '\x02' + line;

      lines[i] = line;
    }
  }

  private addEndingCRLF(lines: string[]): void {
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      line += '\r\n';

      lines[i] = line;
    }
  }
}
