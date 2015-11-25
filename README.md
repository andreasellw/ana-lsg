# ana-lsg
Dies ist eine Mitschrift des Übungsbetriebs der Vorlesung [Analysis I für Informatiker und Statistiker](http://www.mathematik.uni-muenchen.de/~nissen/analysis2015/) im Wintersemester 2015/16 bei Prof. Dr. Peter Pickl. Ohne Anspruch auf Richtigkeit oder Vollständigkeit.

### Kodierung
UTF-8 beim editieren und abspeichern der .tex-Dateien beachten.

### Dokumenationen der geladenen Packete in [pkg.tex](https://github.com/andreasellw/ana-lsg/blob/master/add/pkg.tex)
* [fontenc](https://www.ctan.org/pkg/fontenc)
* [inputenc](https://www.ctan.org/pkg/inputenc)
* [babel](https://www.ctan.org/pkg/babel)
* [geometry](https://www.ctan.org/pkg/geometry)
* [hyperref](https://www.ctan.org/pkg/hyperref)
* [enumitem](https://www.ctan.org/pkg/enumitem)
* [amsmath](https://www.ctan.org/pkg/amsmath)
* [amssymb](https://www.ctan.org/pkg/amssymb)
* [amsthm](https://www.ctan.org/pkg/amsthm)
* [mathptmx](https://www.ctan.org/pkg/mathptmx)
* [datetime2](https://www.ctan.org/pkg/datetime2)

### Output-Ort bestimmen
Mit folgendem Terminal Befehl kann der Output-Ordner bestimmt werden `pdflatex -output-directory=output ana-lsg.tex`

### Layout testen
Folgende Packete sind für das Testen des Layouts hilfreich
```tex
\usepackage{showframe}
\usepackage{blindtext}
```
Mit letzterem kann man einfach ein Dummy-Dokument mit
```tex
\tableofcontents
\Blinddocument
```
erzeugen.
