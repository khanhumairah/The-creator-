import React, { useState } from 'react';
import { 
  Calculator, 
  FileText, 
  Mail, 
  ShieldAlert, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { pitchTemplates } from '../data/tools';

export const ToolkitView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'templates' | 'engagement' | 'asci'>('calculator');

  // Calculator State
  const [hours, setHours] = useState(6);
  const [hourlyRate, setHourlyRate] = useState(600);
  const [channelType, setChannelType] = useState<'influencer' | 'ugc'>('influencer');
  const [distributionFee, setDistributionFee] = useState(4000);
  const [usageRights, setUsageRights] = useState<'organic' | 'paid30' | 'paid60' | 'whitelisting'>('organic');
  const [hasExclusivity, setHasExclusivity] = useState(false);
  const [hasRawFootage, setHasRawFootage] = useState(false);
  const [hasRush, setHasRush] = useState(false);

  // Template State
  const [selectedTemplateId, setSelectedTemplateId] = useState(pitchTemplates[0].id);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Engagement Calculator State
  const [calcFollowers, setCalcFollowers] = useState(8500);
  const [calcReach, setCalcReach] = useState(4200);
  const [calcLikes, setCalcLikes] = useState(240);
  const [calcComments, setCalcComments] = useState(38);
  const [calcSaves, setCalcSaves] = useState(120);
  const [calcShares, setCalcShares] = useState(85);

  // ASCI Decision Tree State
  const [receivedCash, setReceivedCash] = useState<boolean | null>(null);
  const [receivedProduct, setReceivedProduct] = useState<boolean | null>(null);
  const [hasAffiliate, setHasAffiliate] = useState<boolean | null>(null);

  // Calculations for Rate Calculator
  const baseLabor = hours * hourlyRate;
  const distribution = channelType === 'ugc' ? 0 : distributionFee;
  const subtotalBeforeUsage = baseLabor + distribution;

  let usageMultiplier = 0;
  if (usageRights === 'paid30') usageMultiplier = 0.40;
  if (usageRights === 'paid60') usageMultiplier = 0.70;
  if (usageRights === 'whitelisting') usageMultiplier = 0.90;

  const usageFee = Math.round(subtotalBeforeUsage * usageMultiplier);
  
  const exclusivityFee = hasExclusivity ? Math.round(subtotalBeforeUsage * 0.35) : 0;
  const rawFootageFee = hasRawFootage ? Math.round(baseLabor * 0.25) : 0;
  const rushFee = hasRush ? Math.round(subtotalBeforeUsage * 0.25) : 0;

  const grossTotal = subtotalBeforeUsage + usageFee + exclusivityFee + rawFootageFee + rushFee;
  const tdsDeduction = Math.round(grossTotal * 0.10);
  const netInflow = grossTotal - tdsDeduction;

  // Engagement calculation
  const totalInteractions = calcLikes + calcComments + calcSaves + calcShares;
  const engagementRate = calcReach > 0 ? ((totalInteractions / calcReach) * 100).toFixed(2) : '0';
  const saveShareRatio = calcReach > 0 ? (((calcSaves + calcShares) / calcReach) * 100).toFixed(2) : '0';

  const currentTemplate = pitchTemplates.find(t => t.id === selectedTemplateId) || pitchTemplates[0];

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(`Subject: ${currentTemplate.subject}\n\n${currentTemplate.body}`);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF9FB] pb-24">
      
      {/* Header Banner */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-[#FCE7EF]/40 via-[#FFF9FB] to-[#FFF9FB] border-b border-[#F8D5E2]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EF] text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Utility Suite</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30212A] tracking-tight mb-4">
            The Creator Toolkit
          </h1>
          <p className="text-sm sm:text-base text-[#796873] leading-relaxed">
            Objective calculators, contract pitch scripts, and compliance verification tools designed to protect your time and negotiate fair compensation.
          </p>

          {/* Interactive Tool Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-[#FCE7EF]/60 border border-[#F8D5E2] flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'calculator'
                  ? 'bg-[#650D25] text-[#FFF9FB] shadow-sm'
                  : 'text-[#796873] hover:text-[#30212A]'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>INR Rate Calculator</span>
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'templates'
                  ? 'bg-[#650D25] text-[#FFF9FB] shadow-sm'
                  : 'text-[#796873] hover:text-[#30212A]'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Pitch Email Templates</span>
            </button>
            <button
              onClick={() => setActiveTab('engagement')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'engagement'
                  ? 'bg-[#650D25] text-[#FFF9FB] shadow-sm'
                  : 'text-[#796873] hover:text-[#30212A]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Engagement Analyzer</span>
            </button>
            <button
              onClick={() => setActiveTab('asci')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'asci'
                  ? 'bg-[#650D25] text-[#FFF9FB] shadow-sm'
                  : 'text-[#796873] hover:text-[#30212A]'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>ASCI Compliance Checker</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Toolkit Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* TAB 1: INR RATE CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            
            <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl mb-8">
                <h2 className="font-serif text-2xl font-bold text-[#650D25] mb-2">
                  Indian Creator Rate & Quote Calculator
                </h2>
                <p className="text-xs sm:text-sm text-[#796873] leading-relaxed">
                  Based on our Article 6 quote calculation framework: production labor + audience distribution + commercial ad licensing + add-ons. Factors in statutory 10% TDS deductions under Section 194J.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Inputs Column */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Channel / Deliverable Type */}
                  <div className="p-4 rounded-xl bg-[#FCE7EF]/30 border border-[#F8D5E2] space-y-3">
                    <label className="block text-xs font-bold text-[#30212A] uppercase tracking-wider">
                      1. Deliverable Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setChannelType('influencer')}
                        className={`p-3 text-left rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                          channelType === 'influencer'
                            ? 'bg-[#FFF9FB] border-[#650D25] text-[#650D25] shadow-xs'
                            : 'bg-[#FFF9FB] border-[#F8D5E2] text-[#796873]'
                        }`}
                      >
                        <div className="font-bold">Influencer Post</div>
                        <div className="text-[11px] text-[#796873] mt-0.5">Posted on your personal channel</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setChannelType('ugc')}
                        className={`p-3 text-left rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                          channelType === 'ugc'
                            ? 'bg-[#FFF9FB] border-[#650D25] text-[#650D25] shadow-xs'
                            : 'bg-[#FFF9FB] border-[#F8D5E2] text-[#796873]'
                        }`}
                      >
                        <div className="font-bold">UGC Video Asset</div>
                        <div className="text-[11px] text-[#796873] mt-0.5">Asset for brand ads (No personal post)</div>
                      </button>
                    </div>
                  </div>

                  {/* Production Labor Inputs */}
                  <div className="p-4 rounded-xl bg-[#FCE7EF]/30 border border-[#F8D5E2] space-y-4">
                    <label className="block text-xs font-bold text-[#30212A] uppercase tracking-wider">
                      2. Production Effort & Wage
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-[#796873] block mb-1">
                          Estimated Hours (Script, Shoot, Edit): <strong className="text-[#30212A]">{hours} hrs</strong>
                        </span>
                        <input
                          type="range"
                          min="2"
                          max="24"
                          step="1"
                          value={hours}
                          onChange={(e) => setHours(Number(e.target.value))}
                          className="w-full accent-[#650D25]"
                        />
                      </div>

                      <div>
                        <span className="text-xs text-[#796873] block mb-1">
                          Target Hourly Wage (INR): <strong className="text-[#30212A]">₹{hourlyRate}/hr</strong>
                        </span>
                        <input
                          type="range"
                          min="300"
                          max="3000"
                          step="100"
                          value={hourlyRate}
                          onChange={(e) => setHourlyRate(Number(e.target.value))}
                          className="w-full accent-[#650D25]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Distribution Fee if Influencer */}
                  {channelType === 'influencer' && (
                    <div className="p-4 rounded-xl bg-[#FCE7EF]/30 border border-[#F8D5E2] space-y-2">
                      <label className="block text-xs font-bold text-[#30212A] uppercase tracking-wider">
                        3. Audience Distribution Fee (INR)
                      </label>
                      <p className="text-[11px] text-[#796873]">
                        Value of placing the content in front of your community based on average Reel views.
                      </p>
                      <div className="flex items-center gap-3 pt-1">
                        <input
                          type="range"
                          min="1000"
                          max="30000"
                          step="500"
                          value={distributionFee}
                          onChange={(e) => setDistributionFee(Number(e.target.value))}
                          className="flex-1 accent-[#650D25]"
                        />
                        <span className="font-mono text-sm font-bold text-[#650D25] w-20 text-right">
                          ₹{distributionFee.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Commercial Usage Rights */}
                  <div className="p-4 rounded-xl bg-[#FCE7EF]/30 border border-[#F8D5E2] space-y-3">
                    <label className="block text-xs font-bold text-[#30212A] uppercase tracking-wider">
                      4. Commercial Usage Rights & Ad Licensing
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FFF9FB] border border-[#F8D5E2] cursor-pointer">
                        <input
                          type="radio"
                          name="usage"
                          checked={usageRights === 'organic'}
                          onChange={() => setUsageRights('organic')}
                          className="accent-[#650D25]"
                        />
                        <span>Organic Social Only (0%)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FFF9FB] border border-[#F8D5E2] cursor-pointer">
                        <input
                          type="radio"
                          name="usage"
                          checked={usageRights === 'paid30'}
                          onChange={() => setUsageRights('paid30')}
                          className="accent-[#650D25]"
                        />
                        <span>30-Day Paid Ads (+40%)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FFF9FB] border border-[#F8D5E2] cursor-pointer">
                        <input
                          type="radio"
                          name="usage"
                          checked={usageRights === 'paid60'}
                          onChange={() => setUsageRights('paid60')}
                          className="accent-[#650D25]"
                        />
                        <span>60-Day Paid Ads (+70%)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FFF9FB] border border-[#F8D5E2] cursor-pointer">
                        <input
                          type="radio"
                          name="usage"
                          checked={usageRights === 'whitelisting'}
                          onChange={() => setUsageRights('whitelisting')}
                          className="accent-[#650D25]"
                        />
                        <span>Partnership Whitelist (+90%)</span>
                      </label>
                    </div>
                  </div>

                  {/* Commercial Add-ons */}
                  <div className="p-4 rounded-xl bg-[#FCE7EF]/30 border border-[#F8D5E2] space-y-3">
                    <label className="block text-xs font-bold text-[#30212A] uppercase tracking-wider">
                      5. Commercial Add-ons
                    </label>
                    <div className="space-y-2 text-xs">
                      <label className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FFF9FB] border border-[#F8D5E2] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={hasExclusivity}
                          onChange={(e) => setHasExclusivity(e.target.checked)}
                          className="accent-[#650D25]"
                        />
                        <span>30-Day Category Exclusivity (+35% surcharge)</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FFF9FB] border border-[#F8D5E2] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={hasRawFootage}
                          onChange={(e) => setHasRawFootage(e.target.checked)}
                          className="accent-[#650D25]"
                        />
                        <span>Delivery of Unedited Raw B-Roll Footage (+25% labor)</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FFF9FB] border border-[#F8D5E2] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={hasRush}
                          onChange={(e) => setHasRush(e.target.checked)}
                          className="accent-[#650D25]"
                        />
                        <span>Rush Delivery under 72 Hours (+25% urgency fee)</span>
                      </label>
                    </div>
                  </div>

                </div>

                {/* Live Invoice Breakdown Card */}
                <div className="lg:col-span-5">
                  <div className="sticky top-28 bg-[#420817] text-[#FFF9FB] rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
                    <div className="border-b border-[#650D25] pb-4">
                      <div className="text-[11px] uppercase tracking-wider text-[#F8D5E2]">
                        Commercial Quotation Estimate
                      </div>
                      <div className="font-serif text-3xl font-bold text-[#FFF9FB] mt-1">
                        ₹{grossTotal.toLocaleString('en-IN')}
                      </div>
                      <div className="text-xs text-[#FCE7EF]/70">
                        Gross Invoiced Fee (Excl. GST)
                      </div>
                    </div>

                    {/* Line Items */}
                    <div className="space-y-2.5 text-xs">
                      <div className="flex justify-between text-[#FCE7EF]/80">
                        <span>Production Labor ({hours}h @ ₹{hourlyRate}):</span>
                        <span className="font-mono text-[#FFF9FB]">₹{baseLabor.toLocaleString('en-IN')}</span>
                      </div>
                      {channelType === 'influencer' && (
                        <div className="flex justify-between text-[#FCE7EF]/80">
                          <span>Audience Distribution Fee:</span>
                          <span className="font-mono text-[#FFF9FB]">₹{distribution.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      {usageFee > 0 && (
                        <div className="flex justify-between text-[#FCE7EF]/80">
                          <span>Usage Rights & Ad Licensing:</span>
                          <span className="font-mono text-[#FFF9FB]">+₹{usageFee.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      {exclusivityFee > 0 && (
                        <div className="flex justify-between text-[#FCE7EF]/80">
                          <span>30-Day Exclusivity Surcharge:</span>
                          <span className="font-mono text-[#FFF9FB]">+₹{exclusivityFee.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      {rawFootageFee > 0 && (
                        <div className="flex justify-between text-[#FCE7EF]/80">
                          <span>Raw B-Roll Archival Rights:</span>
                          <span className="font-mono text-[#FFF9FB]">+₹{rawFootageFee.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      {rushFee > 0 && (
                        <div className="flex justify-between text-[#FCE7EF]/80">
                          <span>Urgent Rush Turnaround:</span>
                          <span className="font-mono text-[#FFF9FB]">+₹{rushFee.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                    </div>

                    {/* Tax Breakdown */}
                    <div className="pt-4 border-t border-[#650D25] space-y-2 text-xs">
                      <div className="flex justify-between text-[#F8D5E2]">
                        <span>TDS Deduction (10% Sec 194J):</span>
                        <span className="font-mono text-[#F8D5E2]">-₹{tdsDeduction.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-[#FFF9FB] pt-1">
                        <span>Estimated Bank Inflow:</span>
                        <span className="font-mono text-base text-[#F8D5E2]">₹{netInflow.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* Statutory Note */}
                    <div className="p-3 rounded-lg bg-[#650D25]/60 text-[11px] leading-relaxed text-[#FCE7EF]/80 space-y-1">
                      <div className="font-semibold text-[#FFF9FB]">Indian Tax Hygiene Note:</div>
                      <p>
                        The ₹{tdsDeduction.toLocaleString('en-IN')} deducted by the brand will be deposited with the government against your PAN card. Request Form 16A quarterly to claim tax credits.
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: PITCH TEMPLATES */}
        {activeTab === 'templates' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-6 sm:p-8">
              
              <div className="max-w-2xl mb-6">
                <h2 className="font-serif text-2xl font-bold text-[#650D25] mb-2">
                  Brand Pitch Email Templates
                </h2>
                <p className="text-xs sm:text-sm text-[#796873]">
                  Professional, concise pitch scripts based on our cold outreach guidelines. Adapt bracketed details with your real metrics.
                </p>
              </div>

              {/* Template Selectors */}
              <div className="flex flex-wrap gap-2 mb-6">
                {pitchTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplateId(template.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedTemplateId === template.id
                        ? 'bg-[#650D25] text-[#FFF9FB]'
                        : 'bg-[#FCE7EF]/50 text-[#796873] hover:text-[#30212A]'
                    }`}
                  >
                    {template.title}
                  </button>
                ))}
              </div>

              {/* Template Preview Card */}
              <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-xl p-6 relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F8D5E2]">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#650D25]">
                      {currentTemplate.category}
                    </span>
                    <p className="text-xs text-[#796873] mt-0.5">
                      {currentTemplate.description}
                    </p>
                  </div>

                  <button
                    onClick={handleCopyTemplate}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#FFF9FB] bg-[#650D25] hover:bg-[#420817] rounded-md transition-colors cursor-pointer"
                  >
                    {copiedTemplate ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedTemplate ? 'Copied Script' : 'Copy Template'}</span>
                  </button>
                </div>

                <div className="space-y-4 font-mono text-xs text-[#30212A] bg-[#FCE7EF]/20 p-5 rounded-lg border border-[#F8D5E2]/80 leading-relaxed whitespace-pre-wrap">
                  <div className="font-bold text-[#650D25]">Subject: {currentTemplate.subject}</div>
                  <div>{currentTemplate.body}</div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: ENGAGEMENT ANALYZER */}
        {activeTab === 'engagement' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-6 sm:p-8">
              
              <div className="max-w-2xl mb-8">
                <h2 className="font-serif text-2xl font-bold text-[#650D25] mb-2">
                  Creator Engagement & Media Kit Metric Analyzer
                </h2>
                <p className="text-xs sm:text-sm text-[#796873]">
                  Calculate your true Engagement Rate percentage based on Reach (the industry standard used by PR agencies) rather than misleading follower counts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Inputs */}
                <div className="space-y-4 bg-[#FCE7EF]/30 p-6 rounded-xl border border-[#F8D5E2]">
                  <h3 className="font-serif text-sm font-bold text-[#30212A]">
                    Input Averages (From Your Last 10 Posts)
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[#796873] mb-1">Followers:</label>
                      <input
                        type="number"
                        value={calcFollowers}
                        onChange={(e) => setCalcFollowers(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#FFF9FB] border border-[#F8D5E2] rounded-md font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[#796873] mb-1">Average Reach per Post:</label>
                      <input
                        type="number"
                        value={calcReach}
                        onChange={(e) => setCalcReach(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#FFF9FB] border border-[#F8D5E2] rounded-md font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[#796873] mb-1">Average Likes:</label>
                      <input
                        type="number"
                        value={calcLikes}
                        onChange={(e) => setCalcLikes(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#FFF9FB] border border-[#F8D5E2] rounded-md font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[#796873] mb-1">Average Comments:</label>
                      <input
                        type="number"
                        value={calcComments}
                        onChange={(e) => setCalcComments(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#FFF9FB] border border-[#F8D5E2] rounded-md font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[#796873] mb-1">Average Saves:</label>
                      <input
                        type="number"
                        value={calcSaves}
                        onChange={(e) => setCalcSaves(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#FFF9FB] border border-[#F8D5E2] rounded-md font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[#796873] mb-1">Average DM Shares:</label>
                      <input
                        type="number"
                        value={calcShares}
                        onChange={(e) => setCalcShares(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#FFF9FB] border border-[#F8D5E2] rounded-md font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Diagnostic Results */}
                <div className="bg-[#FFF9FB] border border-[#F8D5E2] p-6 rounded-xl space-y-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#650D25] uppercase tracking-wider mb-4">
                      Diagnostic Benchmark
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-[#796873]">Reach-Based Engagement Rate:</div>
                        <div className="font-serif text-4xl font-bold text-[#650D25] mt-0.5">
                          {engagementRate}%
                        </div>
                        <div className="text-[11px] text-[#796873] mt-1">
                          Industry benchmark for micro-creators is 3.5%–7.0%.
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#F8D5E2]">
                        <div className="text-xs text-[#796873]">Save + Share Affinity Rate:</div>
                        <div className="font-serif text-2xl font-bold text-[#30212A] mt-0.5">
                          {saveShareRatio}%
                        </div>
                        <div className="text-[11px] text-[#796873] mt-1">
                          Reflects high-intent utility and word-of-mouth distribution.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#FCE7EF]/60 text-xs text-[#30212A] border border-[#F8D5E2]">
                    <span className="font-bold text-[#650D25]">Media Kit Recommendation: </span>
                    Feature your {engagementRate}% engagement rate prominently in your 1-page PDF. It proves that your community takes action on recommendations.
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ASCI COMPLIANCE CHECKER */}
        {activeTab === 'asci' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-6 sm:p-8">
              
              <div className="max-w-2xl mb-8">
                <h2 className="font-serif text-2xl font-bold text-[#650D25] mb-2">
                  ASCI & CCPA Disclosure Decision Tree
                </h2>
                <p className="text-xs sm:text-sm text-[#796873]">
                  Answer three quick questions to verify your statutory disclosure obligations under Indian advertising guidelines.
                </p>
              </div>

              <div className="max-w-xl mx-auto space-y-6 bg-[#FCE7EF]/20 p-6 rounded-xl border border-[#F8D5E2]">
                
                {/* Q1 */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#30212A]">
                    1. Did you receive monetary compensation for creating or publishing the post?
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setReceivedCash(true)}
                      className={`px-4 py-1.5 text-xs rounded-md border font-medium cursor-pointer ${
                        receivedCash === true ? 'bg-[#650D25] text-white border-[#650D25]' : 'bg-white border-[#F8D5E2]'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setReceivedCash(false)}
                      className={`px-4 py-1.5 text-xs rounded-md border font-medium cursor-pointer ${
                        receivedCash === false ? 'bg-[#650D25] text-white border-[#650D25]' : 'bg-white border-[#F8D5E2]'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Q2 */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#30212A]">
                    2. Did you receive a free product, gifted hotel stay, or complimentary meal?
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setReceivedProduct(true)}
                      className={`px-4 py-1.5 text-xs rounded-md border font-medium cursor-pointer ${
                        receivedProduct === true ? 'bg-[#650D25] text-white border-[#650D25]' : 'bg-white border-[#F8D5E2]'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setReceivedProduct(false)}
                      className={`px-4 py-1.5 text-xs rounded-md border font-medium cursor-pointer ${
                        receivedProduct === false ? 'bg-[#650D25] text-white border-[#650D25]' : 'bg-white border-[#F8D5E2]'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Q3 */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#30212A]">
                    3. Does the post contain an affiliate link, discount coupon, or commission track?
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setHasAffiliate(true)}
                      className={`px-4 py-1.5 text-xs rounded-md border font-medium cursor-pointer ${
                        hasAffiliate === true ? 'bg-[#650D25] text-white border-[#650D25]' : 'bg-white border-[#F8D5E2]'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasAffiliate(false)}
                      className={`px-4 py-1.5 text-xs rounded-md border font-medium cursor-pointer ${
                        hasAffiliate === false ? 'bg-[#650D25] text-white border-[#650D25]' : 'bg-white border-[#F8D5E2]'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Result Output */}
                {(receivedCash !== null || receivedProduct !== null || hasAffiliate !== null) && (
                  <div className="pt-4 border-t border-[#F8D5E2]">
                    {(receivedCash || receivedProduct || hasAffiliate) ? (
                      <div className="p-4 rounded-lg bg-[#650D25] text-white space-y-2 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-[#F8D5E2]">
                          <AlertCircle className="w-4 h-4" />
                          <span>MANDATORY DISCLOSURE REQUIRED</span>
                        </div>
                        <p className="leading-relaxed text-[#FFF9FB]/90">
                          A commercial material connection exists. Under CCPA & ASCI regulations, you must:
                        </p>
                        <ul className="list-disc pl-4 space-y-1 text-[#FCE7EF]">
                          <li>Include <strong>#Ad</strong> or <strong>#Sponsored</strong> within the first 2 lines of your caption.</li>
                          <li>Superimpose a clear visual text overlay on the Reel for at least 2–4 seconds.</li>
                          <li>Enable Instagram&rsquo;s native &ldquo;Paid partnership with...&rdquo; label.</li>
                        </ul>
                      </div>
                    ) : (
                      <div className="p-4 rounded-lg bg-[#FCE7EF] border border-[#F8D5E2] text-[#30212A] text-xs space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-[#650D25]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>No Commercial Disclosure Required</span>
                        </div>
                        <p className="text-[#796873]">
                          If you purchased the product with your own money and receive zero commission, commercial ad disclosure is not required. You may voluntarily state: &ldquo;Purchased with my own funds.&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
};
