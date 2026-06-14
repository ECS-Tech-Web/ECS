import React, { useState, useMemo } from 'react';
import { Search, Trophy, Award, Medal, Users, ShieldAlert, FileText, Upload, Trash2, ArrowUpDown, Calendar } from 'lucide-react';

import SAMPLE_ECE_DATA from './data';

export default function EceLeaderboard() {
  const [students, setStudents] = useState(SAMPLE_ECE_DATA);
  const [rawText, setRawText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [importError, setImportError] = useState('');
  const [activeView, setActiveView] = useState('board');
  const [selectedGradYear, setSelectedGradYear] = useState('2028');

  const targetRollPrefix = useMemo(() => {
    const entryYear = parseInt(selectedGradYear) - 4;
    return `${entryYear.toString().slice(-2)}14`;
  }, [selectedGradYear]);

  const handlePdfTextImport = () => {
    if (!rawText.trim()) {
      setImportError('Please paste some text blocks from your PDF.');
      return;
    }

    try {
      const lines = rawText.split('\n');
      const parsedStudents = [];
      const eceRowRegex = new RegExp(`^\\s*(\\d+)\\s+(${targetRollPrefix}\\d{3})\\s+([\\s\\S]+?)\\s+(\\d+)\\s+(\\d+\\.\\d+)\\s+(\\d+\\.\\d+)\\s*$`);

      lines.forEach((line) => {
        const match = line.match(eceRowRegex);
        if (match) {
          const rollNo = match[2];
          const sgpa = parseFloat(match[5]);
          const cgpa = parseFloat(match[6]);

          parsedStudents.push({
            id: `${rollNo}-${Math.random()}`,
            rollNo,
            sgpa,
            cgpa
          });
        }
      });

      if (parsedStudents.length === 0) {
        throw new Error(`No matching rows found for the Batch of ${selectedGradYear} (Rolls starting with ${targetRollPrefix}xxx).`);
      }

      setStudents(parsedStudents);
      setImportError('');
      setRawText('');
      setActiveView('board');
    } catch (err) {
      setImportError(err.message || 'Error processing the text structure.');
    }
  };

  const sortedAndRankedData = useMemo(() => {
    const filtered = students.filter(student => 
      student.rollNo.startsWith(targetRollPrefix) && 
      student.rollNo.includes(searchQuery)
    );

    const sorted = [...filtered].sort((a, b) => {
      if (b.cgpa !== a.cgpa) return b.cgpa - a.cgpa;
      return b.sgpa - a.sgpa;
    });

    let rankIndex = 0;
    let incrementOffset = 1;
    let trackingCgpa = -1;
    let trackingSgpa = -1;

    return sorted.map((student) => {
      if (student.cgpa === trackingCgpa && student.sgpa === trackingSgpa) {
        incrementOffset++;
      } else {
        rankIndex += incrementOffset;
        incrementOffset = 1;
        trackingCgpa = student.cgpa;
        trackingSgpa = student.sgpa;
      }
      return { ...student, calculatedRank: rankIndex };
    });
  }, [students, searchQuery, targetRollPrefix]);

  const metrics = useMemo(() => {
    if (sortedAndRankedData.length === 0) return { high: '0.00', avg: '0.00', total: 0 };
    const values = sortedAndRankedData.map(s => s.cgpa);
    const topVal = Math.max(...values);
    const sumVal = values.reduce((sum, val) => sum + val, 0);
    return {
      high: topVal.toFixed(2),
      avg: (sumVal / sortedAndRankedData.length).toFixed(2),
      total: sortedAndRankedData.length
    };
  }, [sortedAndRankedData]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans pb-12">
      {/* Added clear top margin padding to stay cleanly below the main app layout nav bar */}
      <main className="max-w-6xl mx-auto px-4 pt-24 sm:pt-28">
        
        {/* Adjusted row layout container to avoid pushing features upward under headers */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8 pb-6 border-b border-slate-900">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 uppercase">
                ECE Department Dashboard
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-100 tracking-tight mt-1">Class Standings</h1>
          </div>

          {/* Controls Wrapper wraps properly on compressed screens */}
          <div className="flex flex-wrap items-center gap-3 z-10">
            {/* Batch Year Selector Toggle */}
            <div className="flex items-center bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              <div className="pl-2 pr-1 text-slate-500">
                <Calendar size={13} />
              </div>
              <select
                value={selectedGradYear}
                onChange={(e) => {
                  setSelectedGradYear(e.target.value);
                  setSearchQuery('');
                }}
                className="bg-transparent text-xs font-semibold text-slate-200 outline-none pr-2 py-0.5 cursor-pointer"
              >
                <option value="2027" className="bg-slate-950">Batch of 2027 (2314xxx)</option>
                <option value="2028" className="bg-slate-950">Batch of 2028 (2414xxx)</option>
                <option value="2029" className="bg-slate-950">Batch of 2029 (2514xxx)</option>
              </select>
            </div>

            {/* View Switching Button Group */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveView('board')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeView === 'board' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Leaderboard
              </button>
              <button
                onClick={() => setActiveView('paste')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${activeView === 'paste' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Upload size={12} />
                Import
              </button>
            </div>
          </div>
        </div>

        {activeView === 'paste' ? (
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-800/80 p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-400">
                <FileText size={18} />
              </div>
              <h2 className="text-base font-bold text-slate-100">Paste Data for Batch of {selectedGradYear}</h2>
            </div>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Copy raw rows from the provisional PDF results. Parser is optimized for target roll prefix <strong className="text-indigo-400">{targetRollPrefix}xxx</strong> based on your selected dropdown year scope.
            </p>

            <textarea
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              rows={10}
              placeholder={`Example text block matching batch rows:\n1   ${targetRollPrefix}001   9   AB   8   BB ... 252   9.00   8.65\n2   ${targetRollPrefix}002   10  AA   9   AB ... 264   9.42   9.12`}
              className="w-full font-mono text-xs p-4 border border-slate-800 rounded-xl bg-slate-950 text-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:outline-none placeholder-slate-700 resize-y transition"
            />

            {importError && (
              <div className="mt-3 p-3.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-xs flex items-center gap-2.5">
                <ShieldAlert size={15} className="shrink-0" />
                <span>{importError}</span>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800/60 mt-5">
              <button
                onClick={() => { setRawText(''); setImportError(''); setActiveView('board'); }}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:bg-slate-900 rounded-xl transition"
              >
                Cancel
              </button>
              <button
                onClick={handlePdfTextImport}
                className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition shadow-lg shadow-indigo-600/20"
              >
                Process Batch Standings
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-900 flex items-center justify-between shadow-md">
                <div>
                  <p className="text-slate-500 text-[10px] font-bold tracking-wider uppercase">Active Class Strength</p>
                  <h3 className="text-2xl font-black text-slate-100 tracking-tight mt-0.5">{metrics.total} <span className="text-xs font-normal text-slate-500">Students</span></h3>
                </div>
                <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
                  <Users size={18} />
                </div>
              </div>
              
              <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-900 flex items-center justify-between shadow-md">
                <div>
                  <p className="text-slate-500 text-[10px] font-bold tracking-wider uppercase">Batch High CGPA</p>
                  <h3 className="text-2xl font-black text-amber-400 tracking-tight mt-0.5">{metrics.high}</h3>
                </div>
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
                  <Trophy size={18} />
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-900 flex items-center justify-between shadow-md">
                <div>
                  <p className="text-slate-500 text-[10px] font-bold tracking-wider uppercase">Batch Average</p>
                  <h3 className="text-2xl font-black text-emerald-400 tracking-tight mt-0.5">{metrics.avg}</h3>
                </div>
                <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                  <Award size={18} />
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 p-3 rounded-2xl border border-slate-900 flex justify-end shadow-md">
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-2.5 text-slate-500" size={14} />
                <input
                  type="text"
                  placeholder={`Search roll inside batch (${targetRollPrefix}...)`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-slate-600 transition"
                />
              </div>
            </div>

            <div className="bg-slate-900/30 rounded-2xl border border-slate-900 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-slate-400 text-[10px] font-bold tracking-wider uppercase border-b border-slate-850">
                      <th className="px-6 py-4 text-center w-24">Rank</th>
                      <th className="px-6 py-4">ECE Roll Number</th>
                      <th className="px-6 py-4 text-center w-40">
                        <span className="flex items-center justify-center gap-1.5">
                          SGPA
                          <ArrowUpDown size={10} className="text-slate-600" />
                        </span>
                      </th>
                      <th className="px-6 py-4 text-center w-44">
                        <span className="flex items-center justify-center gap-1.5 text-indigo-400 font-extrabold">
                          Cumulative CGPA
                          <ArrowUpDown size={10} className="text-indigo-500/60" />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900 text-xs">
                    {sortedAndRankedData.length > 0 ? (
                      sortedAndRankedData.map((student) => {
                        let rankDisplay = null;
                        let rowGlowStyle = 'hover:bg-slate-900/30 text-slate-300';
                        
                        if (student.calculatedRank === 1) {
                          rowGlowStyle = 'bg-amber-500/5 hover:bg-amber-500/10 text-amber-200 font-semibold';
                          rankDisplay = (
                            <span className="inline-flex items-center justify-center bg-amber-500/10 text-amber-400 rounded-lg px-2 py-1 text-xs font-bold border border-amber-500/20 shadow-sm shadow-amber-500/5">
                              <Medal size={12} className="mr-1" /> 1st
                            </span>
                          );
                        } else if (student.calculatedRank === 2) {
                          rowGlowStyle = 'bg-slate-400/5 hover:bg-slate-400/10 text-slate-200 font-semibold';
                          rankDisplay = (
                            <span className="inline-flex items-center justify-center bg-slate-400/10 text-slate-300 rounded-lg px-2 py-1 text-xs font-bold border border-slate-400/20">
                              2nd
                            </span>
                          );
                        } else if (student.calculatedRank === 3) {
                          rowGlowStyle = 'bg-amber-700/5 hover:bg-amber-700/10 text-amber-300 font-semibold';
                          rankDisplay = (
                            <span className="inline-flex items-center justify-center bg-amber-700/10 text-amber-500 rounded-lg px-2 py-1 text-xs font-bold border border-amber-700/20">
                              3rd
                            </span>
                          );
                        } else {
                          rankDisplay = <span className="text-slate-500 font-semibold tracking-wide">{student.calculatedRank}</span>;
                        }

                        return (
                          <tr key={student.id} className={`transition-colors duration-150 ${rowGlowStyle}`}>
                            <td className="px-6 py-3.5 text-center whitespace-nowrap">{rankDisplay}</td>
                            <td className="px-6 py-3.5 font-mono text-slate-200 tracking-wide font-medium whitespace-nowrap">
                              {student.rollNo}
                            </td>
                            <td className="px-6 py-3.5 text-center font-mono text-slate-400 whitespace-nowrap">
                              {student.sgpa.toFixed(2)}
                            </td>
                            <td className="px-6 py-3.5 text-center font-mono font-bold text-indigo-400 text-sm whitespace-nowrap">
                              {student.cgpa.toFixed(2)}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-slate-500 italic bg-slate-900/10">
                          No matching records found for Batch of {selectedGradYear} ({targetRollPrefix}xxx). Try importing data via the 'Import' window.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {students.length !== SAMPLE_ECE_DATA.length && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => { if(window.confirm('Reset leaderboard view back to default sample dataset?')) { setStudents(SAMPLE_ECE_DATA); setSelectedGradYear('2028'); } }}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-400/80 hover:text-rose-400 font-medium transition cursor-pointer bg-rose-500/5 hover:bg-rose-500/10 border border-rose-500/10 px-3 py-1.5 rounded-xl"
                >
                  <Trash2 size={12} />
                  Reset to Samples
                </button>
              </div>
            )}

          </div>
        )}
      </main>
    </div>
  );
}