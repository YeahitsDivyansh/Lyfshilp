import React, { useEffect, useState } from "react";
import "@fontsource/sigmar-one";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PickABank from "./components/Finance Management/Activities/Level 1/Pick A Bank/PickABank";
import OverspendTrap from "./components/Finance Management/Activities/Level 1/OverspendTrap.jsx";
import BudgetActivity from "./components/Finance Management/Activities/Level 1/BudgetActivity/BudgetActivity.jsx";
import BudgetBuilder from "./components/Finance Management/Activities/Level 1/Budeget Builder/BudgetBuilder.jsx";
import CreditCardSimulator from "./components/Finance Management/Activities/Level 2/CreditCardSimulator.jsx";
import InvestmentSimulator from "./components/Finance Management/Activities/Level 3/InvestmentSimulator.jsx";
import Adaptive_Learning_Quiz from "./components/assessment_tools/Adaptive_Learning_Quiz.jsx";
import Finance from "./pages/Finance.jsx";
import EmiVsLumpSum from "./components/Finance Management/Activities/Level 2/EmiVsLumpSum.jsx";
import NewsFlash from "./components/Finance Management/Activities/Level 3/NewsFlash.jsx";
import RiskOMeter from "./components/Finance Management/Activities/Level 3/RiskOMeter.jsx";
import Challenge3 from "./components/Finance Management/Activities/Level 2/Challenge3.jsx";
import My_Purchase_Plan from "./components/Finance Management/Activities/Level 2/My_Purchase_Plan.jsx";
import FinanceNotes from "./pages/FinanceNotes.jsx";
import FAQ from "./FinanceDesign/FAQ.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Section1 from "./pages/sections/Section1.jsx";
import Section2 from "./pages/sections/Section2.jsx";
import Section3 from "./pages/sections/Section3.jsx";
import Section4 from "./pages/sections/Section4.jsx";
import Section5 from "./pages/sections/Section5.jsx";
import Section6 from "./pages/sections/Section6.jsx";
import DigitalMarketingNotes from "./pages/DigitalMarketingNotes.jsx"; // Importing the Digital Marketing Notes page
import Section1dm from "./pages/DMsections/Section1dm";
import Section2dm from "./pages/DMsections/Section2dm";
import Section3dm from "./pages/DMsections/Section3dm";
import Section4dm from "./pages/DMsections/Section4dm";
import Section5dm from "./pages/DMsections/Section5dm";
import Section6dm from "./pages/DMsections/Section6dm";
import Section7dm from "./pages/DMsections/Section7dm";
import Section8dm from "./pages/DMsections/Section8dm";
import IntroPageAdDetective from "./components/Digital Marketing/Level 1/AdDetective/IntroPageAdDetective";
import MissionCompleteAdDetective from "./components/Digital Marketing/Level 1/AdDetective/MissionCompleteAdDetective";
import AdDetectiveGamePage from "./components/Digital Marketing/Level 1/AdDetective/AdDetectiveGamePage";

import PrivacyPolicy from "./Footer-Routes/PrivacyPolicy";
import RefundPolicy from "./Footer-Routes/RefundPolicy";
import TermsAndConditions from "./Footer-Routes/TermsAndConditions";

import BrandCreatorGame from "./components/Digital Marketing/Level 1/BrandCreator/BrandCreatorGame";
import BrandBrandExplorerGameSelect from "./components/Digital Marketing/Level 1/BrandExplorer/BrandExplorerSelect";
import IntroPageBrandExplorer from "./components/Digital Marketing/Level 1/BrandExplorer/IntroPageBrandExplorer";
import BrandExplorerGameComplete from "./components/Digital Marketing/Level 1/BrandExplorer/BrandExplorerGameComplete";
import ScrollToTop from "./ScrollToTop";
import AdminLogin from "./pages/AdminLogin";
import DigitalMarketing from "./pages/DigitalMarketing";
import CaptionCraze from "./components/Digital Marketing/Level 2/Caption Craze/CaptionCraze";
import MatchingGame from "./components/Digital Marketing/Level 2/PostMatch/MatchingGame";
import MatchingGameResult from "./components/Digital Marketing/Level 2/PostMatch/MatchingGameResult";
import ReelPlannerGame from "./components/Digital Marketing/Level 2/Reel-Maker/ReelPlannerGame";
import LegalAwarenessNotes from "./pages/LegalAwarenessNotes";
import Module1 from "./pages/LegalAwareness/Module1";
import Module2 from "./pages/LegalAwareness/Module2";
import Module3 from "./pages/LegalAwareness/Module3";
import Module4 from "./pages/LegalAwareness/Module4";
import Module5 from "./pages/LegalAwareness/Module5";
import Module6 from "./pages/LegalAwareness/Module6";
import CommunicationsNotes from "./pages/CommunicationsNotes";
import Mod1 from "./pages/CommunicationNotes/Mod1";
import Mod2 from "./pages/CommunicationNotes/Mod2";
import Mod3 from "./pages/CommunicationNotes/Mod3";
import Mod4 from "./pages/CommunicationNotes/Mod4";
import Mod5 from "./pages/CommunicationNotes/Mod5";
import SocialLearningNotes from "./pages/SocialLearningNotes";
import KnowingMyself from "./pages/SocialLearningNotes/KnowingMyself";
import BuildPositiveRel from "./pages/SocialLearningNotes/BuildPositiveRel";
import HandlingStress from "./pages/SocialLearningNotes/HandlingStress";
import SelfDiscipline from "./pages/SocialLearningNotes/SelfDiscipline";
import DecisionMaking from "./pages/SocialLearningNotes/DecisionMaking";
import ComputerNotes from "./pages/ComputerNotes";
import WhatIsAi from "./pages/CompNotes/WhatIsAi";
import WorkOfAi from "./pages/CompNotes/WorkOfAi";
import TypesAndUseOfAi from "./pages/CompNotes/TypesAndUseOfAi";
import WhatCantAiDo from "./pages/CompNotes/WhatCantAiDo";
import ImpAIWords from "./pages/CompNotes/ImpAIWords";
import BuildAi from "./pages/CompNotes/BuildAi";
import TestUrSkills from "./pages/CompNotes/TestUrSkills";
import ImportanceOfAi from "./pages/CompNotes/ImportanceOfAi";
import ListenUp from "./components/Communication/Level-1/ListenUp/ListenUp";
import SayItLikeUMeanIt from "./components/Communication/Level-1/SayItLikeUMeanIt/SayItLikeUMeanIt";
import PickYourPersuasion from "./components/Communication/Level-1/PickYourPersuasion/PickYourPersuasion";
import AnalyticsDashboard from "./components/Digital Marketing/Level 3/AnalyticsDashboard/AnalyticsDashboard";
import InterruptGame from "./components/Communication/Level 2/Interrupt/InterruptGame";
import FeelItFindItGame from "./components/Communication/Level 2/FeelItFindIt/FeelItFindItGame";
import NVCGame from "./components/Communication/Level 2/NVC/NVCGame";
import ToneFixer from "./components/Communication/Level-3/ToneFixer/ToneFixer";
import ComplimentQuest from "./components/Communication/Level-3/ComplimentQuest/ComplimentQuest";
import SpeakUpGame from "./components/Communication/Level-3/SpeakUp/SpeakUp";
import WindowSeatWar from "./components/Communication/Level-4/WindowSeatWar/WindowSeatWar";
import PitchItLikePro from "./components/Communication/Level-4/PitchItLikePro/PitchItLikePro";
import CoolTheConflict from "./components/Communication/Level-4/CoolTheConflict/CoolTheConflict";
import LegalQuiz from "./components/Legal Awareness/Level1/LegalQuiz/LegalQuiz";
import PuzzleMatch from "./components/Legal Awareness/Level2/Puzzle Match/PuzzleMatch";
import CatchYourRightsGame from "./components/Legal Awareness/Level2/Catch-rights/CatchYourRightsGame";
import CaseHear from "./components/Legal Awareness/Level3/Case Hear/CaseHear";
import MazeOfChoices from "./components/Legal Awareness/Level4/MazeOfChoices/MazeOfChoices";
import AdCampaignerGame from "./components/Digital Marketing/Level 3/AdCampaign/AdCampaignerGame";
import AdCampaignerIntro from "./components/Digital Marketing/Level 3/AdCampaign/AdCampaignerIntro";
import AdCampaignComplete from "./components/Digital Marketing/Level 3/AdCampaign/AdCampaignComplete";
import BudgetBattleGameComplete from "./components/Digital Marketing/Level 3/Budget Battle/BudgetBattleGameComplete";
import IntroBudgetBattle from "./components/Digital Marketing/Level 3/Budget Battle/IntroBudgetBattle";
import SortItOut from "./components/Legal Awareness/Level1/SortItOut/SortItOut";
import AIChallengeGame from "./components/Computers/Level 1/AIChallengeGame/AIChallengeGame";
import MeetAITypeGame from "./components/Computers/Level 1/MeetAITypeGame/MeetAITypeGame";
import BuildABotChallenge from "./components/Computers/Level 1/BuildABotChallenge/BuildABotChallenge";
import TrainTheBrainGame from "./components/Computers/Level 2/TrainTheBrainGame/TrainTheBrainGame";
import SmartOrNotGame from "./components/Computers/Level 2/SmartOrNotGame/SmartOrNotGame";
import AIProblemSolverGame from "./components/Computers/Level 2/AIProblemSolverGame/AIProblemSolverGame";
import AIEthicsDetective from "./components/Computers/Level 3/AIEthicsDetective/AIEthicsDetective";
import FutureAIArchitect from "./components/Computers/Level 3/FutureAIArchitect/FutureAIArchitect";
import AICareerExplorerGame from "./components/Computers/Level 3/AICareerExplorer/AICareerExplorer";
import MoodMirror from "./components/SEL/Level-1/MoodMirror/MoodMirror";
import FriendshipFixer from "./components/SEL/Level-1/FriendshipFixer/FriendshipFixer";
import KindnessClicks from "./components/SEL/Level-1/KindnessClicks/KindnessClicks";
import StressBusterLab from "./components/SEL/Level-2/StressBusterLab/StressBusterLab";
import ConflictQuest from "./components/SEL/Level-2/ConflictQuest/ConflictQuest";
import MindBodyMatchUp from "./components/SEL/Level-2/MindBodyMatchUp/MindBodyMatchUp";
import InfluenceExplorer from "./components/SEL/Level-2/InfluenceExplorer/InfluenceExplorer";
import SmartCityGame from "./components/Games for 9-10/AI/Level1/SmartCityGame/SmartCityGame";
import SpyTheSmartTech from "./components/Games for 9-10/AI/Level1/SpyTheSmartTech/SpyTheSmartTech";
import WhichAIDoesWhat from "./components/Games for 9-10/AI/Level1/WhichAIDoesWhat/WhichAIDoesWhat";
import JusticeForAll from "./components/Games for 9-10/AI/Level3/JusticeForAll/JusticeForAll";
import DesignAbot from "./components/Games for 9-10/AI/Level3/DesignAbot/DesignAbot";
import BrandVoiceResult from "./components/Games for 9-10/Dig Mkting/Level1/BrandVoice/BrandVoiceResult";
import BrandVoiceGame from "./components/Games for 9-10/Dig Mkting/Level1/BrandVoice/BrandVoiceGame";
import DigitalExplorer from "./components/Games for 9-10/Dig Mkting/Level1/Dig Explorer/DigitalExplorer";
import DigitalExplorerResult from "./components/Games for 9-10/Dig Mkting/Level1/Dig Explorer/DigitalExplorerResult";

import FutureMeInAI from "./components/Games for 9-10/AI/Level3/FutureMeInAI/FutureMeInAI";
import ThinkBeforeYouTechGame from "./components/Games for 9-10/AI/Level3/ThinkBeforeYouTechGame/ThinkBeforeYouTechGame";

import Courses from "./pages/Courses";
import MissionGoalTracker from "./components/SEL/Level-3/MissionGoalTracker/MissionGoalTracker";
import HelpHub from "./components/SEL/Level-3/HelpHub/HelpHub";
import MyCircleMission from "./components/SEL/Level-3/MyCircleMission/MyCircleMission";
import EnvironmentalNotes from "./pages/EnvironmentalNotes";
import ClassifyIt from "./components/Environment/Level-1/ClassifyIt/ClassifyIt";
import PickZone from "./components/Environment/Level-1/PickZone/PickZone";
import ChainReaction from "./components/Environment/Level-1/ChainReaction/ChainReaction";
import GreenBudget from "./components/Environment/Level-2/GreenBudget/GreenBudget";
import MatchFallOut from "./components/Environment/Level-2/MatchFallout/MatchFallOut";
import ClimatePledge from "./components/Environment/Level-2/ClimatePledge/ClimatePledge";
import ReelArchitectGame from "./components/Games for 9-10/Dig Mkting/Level2/ReelArchitectGame/ReelArchitectGame";
import StoryboardSprintGame from "./components/Games for 9-10/Dig Mkting/Level2/StoryboardSprintGame/StoryboardSprintGame";
import BrandVoiceChallenge from "./components/Games for 9-10/Dig Mkting/Level2/BrandVoiceChallenge/BrandVoiceChallenge";
import CauseScanner from "./components/Environment/Level-3/CauseScanner/CauseScanner";
import MeltDownTracker from "./components/Environment/Level-3/MeltDownTracker/MeltDownTracker";
import DilemmaCards from "./components/Environment/Level-3/DilemmaCards/DilemmaCards";
import EntrepreneurshipNotes from "./pages/EntrepreneurshipNotes";
import InnovationExplorer from "./components/Entrepreneurship/Level-1/InnovationExplorer/InnovationExplorer";
import AIStartupBuilder from "./components/Entrepreneurship/Level-1/AIStartupBuilder.jsx/AIStartupBuilder";
import EthicsAndImpact from "./components/Entrepreneurship/Level-2/EthicsAndImpact/EthicsAndImpact";
import PitchChampion from "./components/Entrepreneurship/Level-2/PitchChampion/PitchChampion";
import UserPersonaDetective from "./components/Entrepreneurship/Level-3/UserPersonaDetective/UserPersonaDetective";
import MVPTest from "./components/Entrepreneurship/Level-3/MVPTest/MVPTest";
import SustainabilityGames1 from "./components/Games for 9-10/Environment/Level3/InfrastructureShowdown/SustainabilityGames1";
import SustainabilityGames2 from "./components/Games for 9-10/Environment/Level3/Techno-Solutionism/SustainabilityGames2";
import MeasureCompareQuiz from "./components/Games for 9-10/Environment/Level2/Measure and Compare/MeasureCompareQuiz";
import FeedbackLoopGame from "./components/Games for 9-10/Environment/Level1/Feedback Loop/FeedbackLoopGame";
import CauseEffectGame from "./components/Games for 9-10/Environment/Level1/System Sync/CauseEffectGame";
import LeadershipNotes from "./pages/LeadershipNotes";
import ExternalityDetectiveGame from "./components/Games for 9-10/Environment/Level2/Externality Detective/ExternalityDetectiveGame";
import TortLawGame1 from "./components/Class 11-12/Legal Awareness/Level1/Game1/TortLawGame1";
import TortLawGame2 from "./components/Class 11-12/Legal Awareness/Level1/Game2/TortLawGame2";
import TortLawGame3 from "./components/Class 11-12/Legal Awareness/Level1/Game3/TortLawGame3";
import CrimeCivilGame from "./components/Class 11-12/Legal Awareness/Level2/CrimeCivilGame/CrimeCivilGame";
import LegalConceptsGame from "./components/Class 11-12/Legal Awareness/Level3/LegalConcepts/LegalConceptsGame";
import LegalConceptsResult from "./components/Class 11-12/Legal Awareness/Level3/LegalConcepts/LegalConceptsResult";
import LandmarkCasesGame from "./components/Class 11-12/Legal Awareness/Level3/LandmarkCases/LandmarkCasesGame";
import LandmarkCasesResult from "./components/Class 11-12/Legal Awareness/Level3/LandmarkCases/LandmarkCasesResult";
import CarbonCycleVault from "./components/Class 11-12/Environment/Level-1/CarbonCycleVault/CarbonCycleVault";
import NitrogenReactor from "./components/Class 11-12/Environment/Level-1/NitrogenReactor/NitrogenReactor";
import PhosphorusLockdown from "./components/Class 11-12/Environment/Level-1/PhosphorusLockdown/PhosphorusLockdown";
import WaterGridCrisis from "./components/Class 11-12/Environment/Level-1/WaterGridCrisis/WaterGridCrisis";
import UrbanFloodFlashpoint from "./components/Class 11-12/Environment/Level-2/UrbanFloodFlashpoint/UrbanFloodFlashpoint";
import DayZero from "./components/Class 11-12/Environment/Level-2/DayZero/DayZero";
import UreaAddiction from "./components/Class 11-12/Environment/Level-3/UreaAddiction/UreaAddiction";
import PeakPhosphorusPanic from "./components/Class 11-12/Environment/Level-3/PeakPhosphorusPanic/PeakPhosphorusPanic";
import LegalQuizQuestLevel3 from "./components/Games for 9-10/Legal Awareness/Level3/Quiz/LegalQuizQuestLevel3";
import JusticeThroneGame from "./components/Games for 9-10/Legal Awareness/Level2/Justice Throne/JusticeThroneGame";
import MatchTermsGameResult from "./components/Games for 9-10/Legal Awareness/Level1/Result";
import MatchTermsGame from "./components/Games for 9-10/Legal Awareness/Level1/Game";
import EthicsFirewallGame from "./components/Class 11-12/Entrepreneurship/Game3/Game3";
import StartupSimulationGame from "./components/Class 11-12/Entrepreneurship/Game2/Game2";
import ProblemSolutionGame from "./components/Class 11-12/Entrepreneurship/Game1/Game1";
import Computer from "./pages/Computers";
import Law from "./pages/Law";
import Communication from "./pages/Communication";
import Entrepreneurship from "./pages/Entrepreneurship";
import LeaderTypeMatch from "./components/Leadership/Level-1/LeaderType/LeaderTypeMatch";
import VisionBuilderGame from "./components/Leadership/Level-1/VisionBuilder/VisionBuilder";
import CommunicationLab from "./components/Leadership/Level-2/CommunicationLab/CommunicationLab";
import EmpathyRadarGame from "./components/Leadership/Level-2/EmpathyRadarGame/EmpathyRadarGame";
import DecisionRoom from "./components/Leadership/Level-3/DecisionRoom/DecisionRoom";
import TeamArchitect from "./components/Leadership/Level-3/TeamArchitect/TeamArchitect";
import InnovationSprint from "./components/Leadership/Level-4/InnovationSprint/InnovationSprint";
import Leadership from "./pages/Leadership";
import IntegrityQuest from "./components/Leadership/Level-4/IntegrityQuest/IntegrityQuest";
import Environment from "./pages/Environment";
import SocialLearning from "./pages/SocialLearning";
import AboutUs from "./pages/AboutUs";
import LeadershipIdentityMixer from "./components/Games for 9-10/Leadership/Level-1/LeadershipIdentityMixer/LeadershipIdentityMixer";
import VisionBlueprintBuilder from "./components/Games for 9-10/Leadership/Level-1/VisionBlueprintBuilder/VisionBlueprintBuilder";
import ConflictSimulator from "./components/Games for 9-10/Leadership/Level-2/ConflictSimulator/ConflictSimulator";
import EQTracker from "./components/Games for 9-10/Leadership/Level-2/EQTracker/EQTracker";
import EthicalLogicMaze from "./components/Games for 9-10/Leadership/Level-3/EthicalLogicMaze/EthicalLogicMaze";
import TeamArchitectMission from "./components/Games for 9-10/Leadership/Level-3/TeamArchitectMission/TeamArchitectMission";
import InnovationLaunchpad from "./components/Games for 9-10/Leadership/Level-4/InnovationLaunchpad/InnovationLaunchpad";
import BiasDetective from "./components/Games for 9-10/Leadership/Level-4/BiasDetective/BiasDetective";
import BiasDetectiveGame from "./components/Class 11-12/Leadership/BiasDetectiveGame/BiasDetectiveGame";
import InnovationLaunchpadGame from "./components/Class 11-12/Leadership/InnovationLaunchpad/InnovationLaunchpad";
import TeamLeadershipGame from "./components/Class 11-12/Leadership/TeamLeadershipGame/TeamLeadershipGame";
import EthicsLabyrinth from "./components/Class 11-12/Leadership/EthicsLabyrinth/EthicsLabyrinth";
import EQGame from "./components/Class 11-12/Leadership/EQGame/EQGame";
import CommunicationGame from "./components/Class 11-12/Leadership/CommunicationGame/CommunicationGame";
import StrategicFrameworkGame from "./components/Class 11-12/Leadership/StrategicDilemmaDecoder/StrategicDilemmaDecoder";
import BrandYouSimulator from "./components/Class 11-12/Leadership/BrandYouSimulator/BrandYouSimulator";
import SDGStartupQuest from "./components/Class 11-12/Entrepreneurship/Game6/Game6";
import SimulatedMarketGame from "./components/Class 11-12/Entrepreneurship/Game5/Game5";
import PitchArenaPro from "./components/Class 11-12/Entrepreneurship/Game4/Game4";
import BodyLanguageGame from "./components/Class 11-12/Communication/Level1/BodyLanguageGame/BodyLanguageGame";
import ActiveListeningGame from "./components/Class 11-12/Communication/Level1/ActiveListeningGame/ActiveListeningGame";
import ToneSimulatorGame from "./components/Class 11-12/Communication/Level1/ToneSimulatorGame/ToneSimulatorGame";
import PersuadeWithPurpose from "./components/Class 11-12/Communication/Level2/PersuadeWithPurpose/PersuadeWithPurpose";
import DigitalDilemmaGame from "./components/Class 11-12/Communication/Level2/DigitalDilemmaGame/DigitalDilemmaGame";
import ResolveItRight from "./components/Class 11-12/Communication/Level2/ResolveItRight/ResolveItRight";
import LeadershipGame from "./components/Class 11-12/Communication/Level3/LeadershipGame/LeadershipGame";
import PRCrisisGame from "./components/Class 11-12/Communication/Level3/PRCrisisGame/PRCrisisGame";
import FeedbackLoop from "./components/Class 11-12/Communication/Level3/FeedbackLoopGame/FeedbackLoopGame";
import LevelController from "./components/Games for 9-10/Dig Mkting/Level3/CampaignCaptainGame/LevelController";
import BudgetBossGame from "./components/Games for 9-10/Finance/Game3";
import MiniMarketMaster from "./components/Games for 9-10/Finance/Game2";
import WealthQuestGame from "./components/Games for 9-10/Finance/Game";
import EmotionDecoder from "./components/Games for 9-10/SEL/Level-1/EmotionDecoder/EmotionDecoder";
import RespondDontReact from "./components/Games for 9-10/SEL/Level-1/RespondDontReact/RespondDontReact";
import SpotTheStrength from "./components/Games for 9-10/SEL/Level-1/SpotTheStrength/SpotTheStrength";
import StressResponseBuilder from "./components/Games for 9-10/SEL/Level-2/StressResponseBuilder/StressResponseBuilder";
import ConflictChoices from "./components/Games for 9-10/SEL/Level-2/ConflictChoices/ConflictChoices";
import BodySignalMatchup from "./components/Games for 9-10/SEL/Level-2/BodySignalMatchup/BodySignalMatchup";
import FinFestGame from "./components/Class 11-12/Finance/Game3";
import StockTraderGame from "./components/Class 11-12/Finance/Game2";
import InvestoQuestPro from "./components/Class 11-12/Finance/Game1";
import SmartGoalLab from "./components/Games for 9-10/SEL/Level-3/SmartGoalLab/SmartGoalLab";
import HelpNetworkBuilder from "./components/Games for 9-10/SEL/Level-3/HelpNetworkBuilder/HelpNetworkBuilder";
import InfluenceJournal from "./components/Games for 9-10/SEL/Level-3/InfluenceJournal/InfluenceJournal";
import ThoughtReframer from "./components/Class 11-12/SEL/ThoughtReframerDrag/ThoughtReframerDrag";
import BoundaryBuilder from "./components/Class 11-12/SEL/BoundaryBuilder/BoundaryBuilder";
import BurnoutBarometer from "./components/Class 11-12/SEL/BurnoutBarometer/BurnoutBarometer";
import FocusTracker from "./components/Class 11-12/SEL/FocusTracker/FocusTracker";
import EthicalSimulator from "./components/Class 11-12/SEL/EthicalSimulator/EthicalSimulator";
import LegacyBuilder from "./components/Class 11-12/SEL/LegacyBuilder/LegacyBuilder";
import IdentityShifter from "./components/Class 11-12/SEL/IdentityShifter/IdentityShifter";
import AdSpotterGame from "./components/Class 11-12/DM/Level1/Adspotter";
import AudienceMatchUpGame from "./components/Class 11-12/DM/Level1/AudienceMatchUpGame";
import PersonaBuilderGame from "./components/Class 11-12/DM/Level1/PersonaBuilderGame";
import CaptionClinicGame from "./components/Class 11-12/DM/Level2/CaptionClinicGame";
import PlatformPickerGame from "./components/Class 11-12/DM/Level2/PlatformPickerGame";
import CampaignPuzzleGame from "./components/Class 11-12/DM/Level2/CampaignPuzzleGame";
import BoostOrPostGame from "./components/Class 11-12/DM/Level3/BoostOrPostGame";
import CampaignBuilderGame from "./components/Class 11-12/DM/Level3/CampaignBuilderGame";
import MetricMatchUpGame from "./components/Class 11-12/DM/Level3/MetricMatchUpGame";
import SocialMediaDetective from "./components/Class 11-12/Computers/Level1/SocialMediaDetective/SocialMediaDetective";
import SmartGPSChallenge from "./components/Class 11-12/Computers/Level1/SmartGPSChallenge/SmartGPSChallenge";
import EvolutionLabSimulator from "./components/Class 11-12/Computers/Level1/EvolutionLabSimulator/EvolutionLabSimulator";
import ChessMasterTrainer from "./components/Class 11-12/Computers/Level1/ChessMasterTrainer/ChessMasterTrainer";
import MedicalDiagnosisAssistant from "./components/Class 11-12/Computers/Level2/MedicalDiagnosisAssistant/MedicalDiagnosisAssistant";
import SmartEmailGuardian from "./components/Class 11-12/Computers/Level2/SmartEmailGuardian/SmartEmailGuardian";
import NetflixRecommendationGame from "./components/Class 11-12/Computers/Level2/NetflixRecommender/NetflixRecommender";
import AutonomousCarVision from "./components/Class 11-12/Computers/Level2/AutonomousCarVisionGame/AutonomousCarVisionGame";
import CustomerServiceChatbotBuilder from "./components/Class 11-12/Computers/Level3/ChatbotBuilder/ChatbotBuilder";
import SchoolSocialMediaManager from "./components/Class 11-12/Computers/Level3/SchoolSocialMediaManager/SchoolSocialMediaManager";
import PersonalStudyBuddy from "./components/Class 11-12/Computers/Level3/PersonalStudyBuddy/PersonalStudyBuddy";
import RateTheIntelligenceGame from "./components/Games for 9-10/AI/Level2/RateTheIntelligenceGame/RateTheIntelligenceGame";
import AIOopsGame from "./components/Games for 9-10/AI/Level2/AIMistakeDetectorGame/AIMistakeDetectorGame";
import TrainAIModelGame from "./components/Games for 9-10/AI/Level2/TrainTheTrainerPlants/TrainTheTrainerPlants";
import DecodetheMessage from "./components/Games for 9-10/Communication/Level1/DecodetheMessage/DecodetheMessage";
import ListenerLensGame from "./components/Games for 9-10/Communication/Level1/ListenerLensGame/ListenerLensGame";
import WhatWentWrongGame from "./components/Games for 9-10/Communication/Level1/WhatWentWrongGame/WhatWentWrongGame";
import PitchPerfectGame from "./components/Games for 9-10/Communication/Level2/PitchPerfectGame/PitchPerfectGame";
import DigitalDilemma from "./components/Games for 9-10/Communication/Level2/DigitalDilemma/DigitalDilemma";
import ToneTranslatorGame from "./components/Games for 9-10/Communication/Level2/ToneTranslatorGame/ToneTranslatorGame";
import ConflictCommanderGame from "./components/Games for 9-10/Communication/Level3/ConflictCommanderGame/ConflictCommanderGame";
import TheBigSpeech from "./components/Games for 9-10/Communication/Level3/TheBigSpeech/TheBigSpeech";
import InboxInsightGame from "./components/Games for 9-10/Communication/Level3/InboxInsight/InboxInsight";
import CarouselCampaign from "./components/Games for 9-10/Dig Mkting/Level1/CarouselCampaign/CarouselCampaign";
import VideoAudioSyncIntro from "./components/VideoAudioSyncIntro";
import PaymentRequired from "./pages/PaymentRequired";
import LeanMachineGame from "./components/Games for 9-10/Entreprenurship/Level1/LeanMachineGame/LeanMachineGame";
import PitchArenaGame from "./components/Games for 9-10/Entreprenurship/Level1/PitchArenaGame/PitchArenaGame";
import StartupQuest from "./components/Games for 9-10/Entreprenurship/Level1/StartupQuest/StartupQuest";
import EthicsEscapeRoomGame from "./components/Games for 9-10/Entreprenurship/Level2/EthicsEscapeRoomGame/EthicsEscapeRoomGame";
import MarketPulseChallenge from "./components/Games for 9-10/Entreprenurship/Level2/MarketPulseChallenge/MarketPulseChallenge";
import StartupFinanceFunGame from "./components/Games for 9-10/Entreprenurship/Level2/StartupFinanceLabGame/StartupFinanceLabGame";
import AllBlogs from "./pages/AllBlogs";
import SingleBlog from "./pages/SingleBlog";
import CreateBlog from "./pages/CreateBlog";
import Pricing from "./pages/Pricing";

const INTRO_EXPIRY_HOURS = 0.5; // Change this to 1 for 1 hour, 0.1 for 6 minutes, etc.

// Wrapper component to use useLocation hook
function AppContent() {
  const location = useLocation();

  // Define game routes where footer should not appear
  const gameRoutes = [
    "/pick-a-bank",
    "/budget-activity",
    "/budget-builder",
    "/overspend-trap",
    "/credit-card-simulator",
    "/investment-simulator",
    "/quiz",
    "/emi-vs-lumpsum",
    "/newsflash",
    "/riskometer",
    "/challenge3",
    "/my_purchase_plan",
    "/intro-ad-detective-game",
    "/ad-detective-game",
    "/ad-detective-mission-complete",
    "/brand-creator-game",
    "/brand-explorer-intro",
    "/brand-explorer-game",
    "/brand-explorer-game-complete",
    "/caption-craze",
    "/matching-game",
    "/matching-game-result",
    "/reel-planner-game",
    "/intro-budget-battle",
    "/budget-battle-game-complete",
    "/ad-campaigner-game-complete",
    "/ad-campaigner-intro",
    "/ad-campaigner-game",
    "/analytics-adventure",
    "/maze-of-choices",
    "/case-hear",
    "/catch-your-rights",
    "/puzzle-match",
    "/sort-it-out",
    "/legal-quiz",
    "/listen-up",
    "/say-it-like-you-mean-it",
    "/pick-your-persuasion",
    "/interrupt-game",
    "/feel-it-find-it-game",
    "/nvc-game",
    "/tone-fixer",
    "/speak-up-without-blowing-up",
    "/compliment-quest",
    "/window-seat-war",
    "/pitch-it-like-a-pro",
    "/cool-the-conflict",
    "/mood-mirror",
    "/friendship-fixer",
    "/kindness-clicks",
    "/stress-buster-lab",
    "/conflict-quest",
    "/mind-body-match-up",
    "/influence-explorer",
    "/help-hub",
    "/mission-goal-tracker",
    "/my-circle-mission",
    "/leader-type",
    "/vision-builder",
    "/communication-lab",
    "/empathy-radar",
    "/decision-room",
    "/team-architect",
    "/innovation-sprint",
    "/integrity-quest",
    "/innovation-explorer",
    "/ai-startup-builder",
    "/ethics-and-impact",
    "/pitch-champion",
    "/user-persona-detective",
    "/mvp-test",
    "/classify-it",
    "/pick-zone",
    "/chain-reaction",
    "/green-budget",
    "/match-fallout",
    "/climate-pledge",
    "/cause-scanner",
    "/melt-down-tracker",
    "/dilemma-cards",
    "/AI-challenge",
    "/meet-ai-types",
    "/build-a-bot",
    "/train-the-brain",
    "/smart-or-not",
    "/ai-problem-solver",
    "/ai-ethics-detective",
    "/future-ai-architect",
    "/ai-career-explorer",
    "/spy-the-smart-tech",
    "/which-ai-does-what",
    "/smart-city-game",
    "/TrainAIModelGame",
    "/AIOopsGame",
    "/RateTheIntelligenceGame",
    "/justice-for-all",
    "/design-a-bot",
    "/FutureMeInAI",
    "/ThinkBeforeYouTechGame",
    "/LeanMachineGame",
    "/PitchArenaGame",
    "/StartupQuest",
    "/EthicsEscapeRoomGame",
    "/MarketPulseChallenge",
    "/StartupFinanceFunGame",
    "/brand-voice-result",
    "/brand-voice",
    "/carousel-campaign",
    "/digital-explorer-result",
    "/digital-explorer",
    "/reel-architect",
    "/StoryboardSprintGame",
    "/BrandVoiceChallengeGame",
    "/CampaignCaptainGame",
    "/budget-boss-game",
    "/mini-market-master",
    "/wealth-quest-game",
    "/leadership-identity-mixer",
    "/vision-blueprint-builder",
    "/conflict-simulator",
    "/eq-tracker",
    "/ethical-logical-maze",
    "/team-architect-mission",
    "/innovation-launchpad",
    "/bias-detective",
    "/emotion-decoder",
    "/respond-dont-react",
    "/spot-the-strength",
    "/stress-response-builder",
    "/conflict-choices",
    "/body-signal-matchup",
    "/smart-goal-lab",
    "/help-network-builder",
    "/influence-journal",
    "/fin-fest-game",
    "/stock-trader-game",
    "/invest-quest-pro",
    "/ad-spotter-game",
    "/audience-match-up-game",
    "/persona-builder-game",
    "/caption-clinic-game",
    "/platform-picker-game",
    "/campaign-puzzle-game",
    "/boost-or-post-game",
    "/campaign-builder-game",
    "/metric-match-up-game",
    "/BodyLanguageGame",
    "/ActiveListeningGame",
    "/ToneSimulatorGame",
    "/PersuasionGame",
    "/DigitalDilemmaGame",
    "/ResolveItRight",
    "/LeadershipGame",
    "/PRCrisisGame",
    "/FeedbackLoop",
    "/ethics-firewall-game",
    "/startup-simulation-game",
    "/problem-solution-game",
    "/PitchArenaPro",
    "/SimulatedMarketGame",
    "/SDGStartupQuest",
    "/BrandYouSimulator",
    "/StrategicFrameworkGame",
    "/CommunicationGame",
    "/EQGame",
    "/EthicsLabyrinth",
    "/TeamLeadershipGame",
    "/BiasDetectiveGame",
    "/InnovationLaunchpad-Game",
    "/ThoughtReframerDrag",
    "/BoundaryBuilder",
    "/BurnoutBarometer",
    "/FocusTracker",
    "/EthicalSimulator",
    "/LegacyBuilder",
    "/IdentityShifter",
    "/SocialMediaDetective",
    "/SmartGPSChallenge",
    "/EvolutionLabSimulator",
    "/ChessMasterTrainer",
    "/MedicalDiagnosisAssistant",
    "/SmartEmailGuardian",
    "/recommender",
    "/AutonomousCarVision",
    "/ChatbotBuilder",
    "/SchoolSocialMediaManager",
    "/PersonalStudyBuddy",
    "/CarbonCycleVault",
    "/NitrogenReactor",
    "/PhosphorusLockdown",
    "/WaterGridCrisis",
    "/UrbanFloodFlashpoint",
    "/DayZero",
    "/UreaAddiction",
    "/PeakPhosphorusPanic",
    "/TortLawGame1",
    "/TortLawGame2",
    "/TortLawGame3",
    "/CrimeCivilGame",
    "/LandmarkCasesGame",
    "/LandmarkCasesResult",
    "/LegalConceptsGame",
    "/LegalConceptsResult",
    "/DecodetheMessage",
    "/ListenerLensGame",
    "/WhatWentWrongGame",
    "/PitchPerfectGame",
    "/DigitalDilemma",
    "/ToneTranslatorGame",
    "/ConflictCommanderGame",
    "/TheBigSpeech",
    "/InboxInsightGame",
    "/CauseEffectGame",
    "/FeedbackLoopGame",
    "/MeasureCompareQuiz",
    "/ExternalityDetectiveGame",
    "/SustainabilityGames1",
    "/SustainabilityGames2",
    "/MatchTermsGame",
    "/match-terms-game-result",
    "/JusticeThroneGame",
    "/LegalQuizQuestLevel3",
  ];

  const shouldShowFooter = !gameRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/finance/games" element={<Finance />} />
          <Route path="/finance/notes" element={<FinanceNotes />} />
          <Route path="/finance/notes/section-1" element={<Section1 />} />
          <Route path="/finance/notes/section-2" element={<Section2 />} />
          <Route path="/finance/notes/section-3" element={<Section3 />} />
          <Route path="/finance/notes/section-4" element={<Section4 />} />
          <Route path="/finance/notes/section-5" element={<Section5 />} />
          <Route path="/finance/notes/section-6" element={<Section6 />} />
          {/* Finance Management Games 6th-8th */}
          <Route path="/pick-a-bank" element={<PickABank />} />
          <Route path="/budget-activity" element={<BudgetActivity />} />
          <Route path="/budget-builder" element={<BudgetBuilder />} />
          <Route path="/overspend-trap" element={<OverspendTrap />} />
          <Route
            path="/credit-card-simulator"
            element={<CreditCardSimulator />}
          />
          <Route
            path="/investment-simulator"
            element={<InvestmentSimulator />}
          />
          <Route path="/quiz" element={<Adaptive_Learning_Quiz />} />
          <Route path="/emi-vs-lumpsum" element={<EmiVsLumpSum />} />
          <Route path="/newsflash" element={<NewsFlash />} />
          <Route path="/riskometer" element={<RiskOMeter />} />
          <Route path="/challenge3" element={<Challenge3 />} />
          <Route path="/my_purchase_plan" element={<My_Purchase_Plan />} />

          {/* Digital Marketing Routes */}

          {/* Games of digital marketing */}

          {/* Level 1 games of digital marketing */}
          <Route
            path="/digital-marketing/games"
            element={<DigitalMarketing />}
          />

          <Route
            path="/intro-ad-detective-game"
            element={<IntroPageAdDetective />}
          />
          <Route path="/ad-detective-game" element={<AdDetectiveGamePage />} />
          <Route
            path="/ad-detective-mission-complete"
            element={<MissionCompleteAdDetective />}
          />
          <Route path="/brand-creator-game" element={<BrandCreatorGame />} />

          <Route
            path="/brand-explorer-intro"
            element={<IntroPageBrandExplorer />}
          />
          <Route
            path="/brand-explorer-game"
            element={<BrandBrandExplorerGameSelect />}
          />
          <Route
            path="/brand-explorer-game-complete"
            element={<BrandExplorerGameComplete />}
          />

          {/* Level 2 games of digital marketing */}

          <Route path="/caption-craze" element={<CaptionCraze />} />
          <Route path="/matching-game" element={<MatchingGame />} />
          <Route
            path="/matching-game-result"
            element={<MatchingGameResult />}
          />

          <Route path="/reel-planner-game" element={<ReelPlannerGame />} />

          {/* Level 3 games of digital marketing */}

          <Route path="/intro-budget-battle" element={<IntroBudgetBattle />} />
          <Route
            path="/budget-battle-game-complete"
            element={<BudgetBattleGameComplete />}
          />
          <Route
            path="/ad-campaigner-game-complete"
            element={<AdCampaignComplete />}
          />
          <Route path="/ad-campaigner-intro" element={<AdCampaignerIntro />} />
          <Route path="/ad-campaigner-game" element={<AdCampaignerGame />} />

          <Route path="/analytics-adventure" element={<AnalyticsDashboard />} />

          {/*End of Games of digital marketing */}

          {/* Notes Page of digital marketing */}
          <Route
            path="/digital-marketing/notes"
            element={<DigitalMarketingNotes />}
          />
          <Route
            path="/digitalmarketing/notes/section-1"
            element={<Section1dm />}
          />
          <Route
            path="/digitalmarketing/notes/section-2"
            element={<Section2dm />}
          />
          <Route
            path="/digitalmarketing/notes/section-3"
            element={<Section3dm />}
          />
          <Route
            path="/digitalmarketing/notes/section-4"
            element={<Section4dm />}
          />
          <Route
            path="/digitalmarketing/notes/section-5"
            element={<Section5dm />}
          />
          <Route
            path="/digitalmarketing/notes/section-6"
            element={<Section6dm />}
          />
          <Route
            path="/digitalmarketing/notes/section-7"
            element={<Section7dm />}
          />
          <Route
            path="/digitalmarketing/notes/section-8"
            element={<Section8dm />}
          />

          {/* Legal Awareness  */}
          <Route path="/law/games" element={<Law />} />

          {/* Legal Awareness Games */}

          {/* Level 4 */}
          <Route path="/maze-of-choices" element={<MazeOfChoices />} />
          {/* Level 3 */}
          <Route path="/case-hear" element={<CaseHear />} />

          {/* Level 2 */}
          <Route path="/catch-your-rights" element={<CatchYourRightsGame />} />
          <Route path="/puzzle-match" element={<PuzzleMatch />} />

          {/* Level 1 */}
          <Route path="/sort-it-out" element={<SortItOut />} />
          <Route path="/legal-quiz" element={<LegalQuiz />} />

          {/* Legal Awareness Games Finish */}

          {/* Legal Awareness Notes Page */}
          <Route path="/law/notes" element={<LegalAwarenessNotes />} />
          <Route path="/law/notes/module-1" element={<Module1 />} />
          <Route path="/law/notes/module-2" element={<Module2 />} />
          <Route path="/law/notes/module-3" element={<Module3 />} />
          <Route path="/law/notes/module-4" element={<Module4 />} />
          <Route path="/law/notes/module-5" element={<Module5 />} />
          <Route path="/law/notes/module-6" element={<Module6 />} />
          {/* Legal Awareness Notes Finish */}

          {/* Communication Games */}
          <Route path="/communications/games" element={<Communication />} />
          {/* Level -1*/}
          <Route path="/listen-up" element={<ListenUp />} />
          <Route
            path="/say-it-like-you-mean-it"
            element={<SayItLikeUMeanIt />}
          />
          <Route
            path="/pick-your-persuasion"
            element={<PickYourPersuasion />}
          />

          {/* Level 2 */}
          <Route path="/interrupt-game" element={<InterruptGame />} />
          <Route path="/feel-it-find-it-game" element={<FeelItFindItGame />} />
          <Route path="/nvc-game" element={<NVCGame />} />

          {/* Level - 3*/}
          <Route path="/tone-fixer" element={<ToneFixer />} />
          <Route
            path="/speak-up-without-blowing-up"
            element={<SpeakUpGame />}
          />
          <Route path="/compliment-quest" element={<ComplimentQuest />} />

          {/*Level 4*/}
          <Route path="/window-seat-war" element={<WindowSeatWar />} />
          <Route path="/pitch-it-like-a-pro" element={<PitchItLikePro />} />
          <Route path="/cool-the-conflict" element={<CoolTheConflict />} />

          {/*Communication Notes Page */}
          <Route
            path="/communications/notes"
            element={<CommunicationsNotes />}
          />
          <Route
            path="/communications/notes/listen-to-understand"
            element={<Mod1 />}
          />
          <Route
            path="/communications/notes/feelings-explorer"
            element={<Mod2 />}
          />
          <Route
            path="/communications/notes/speak-with-purpose"
            element={<Mod3 />}
          />
          <Route
            path="/communications/notes/conflict-resolution"
            element={<Mod4 />}
          />
          <Route
            path="/communications/notes/online-vs-real"
            element={<Mod5 />}
          />

          {/* Social Learning Games for 6th-8th */}
          <Route path="/social-learning/games" element={<SocialLearning />} />
          {/* Level 1 */}
          <Route path="/mood-mirror" element={<MoodMirror />} />
          <Route path="/friendship-fixer" element={<FriendshipFixer />} />
          <Route path="/kindness-clicks" element={<KindnessClicks />} />
          {/* Level 2 */}
          <Route path="/stress-buster-lab" element={<StressBusterLab />} />
          <Route path="/conflict-quest" element={<ConflictQuest />} />
          <Route path="/mind-body-match-up" element={<MindBodyMatchUp />} />
          <Route path="/influence-explorer" element={<InfluenceExplorer />} />
          {/* Level 3 */}
          <Route path="/help-hub" element={<HelpHub />} />
          <Route
            path="/mission-goal-tracker"
            element={<MissionGoalTracker />}
          />
          <Route path="/my-circle-mission" element={<MyCircleMission />} />

          {/* Social Learning Notes */}
          <Route
            path="/social-learning/notes"
            element={<SocialLearningNotes />}
          />
          <Route path="/social-learning/module-1" element={<KnowingMyself />} />
          <Route
            path="/social-learning/module-2"
            element={<BuildPositiveRel />}
          />
          <Route
            path="/social-learning/module-3"
            element={<HandlingStress />}
          />
          <Route
            path="/social-learning/module-4"
            element={<SelfDiscipline />}
          />
          <Route
            path="/social-learning/module-5"
            element={<DecisionMaking />}
          />

          {/*  Leadership Notes*/}
          <Route path="/leadership/notes" element={<LeadershipNotes />} />
          {/*  Leadership Games 6-8*/}
          <Route path="/leadership/games" element={<Leadership />} />
          {/*  level 1*/}
          <Route path="/leader-type" element={<LeaderTypeMatch />} />
          <Route path="/vision-builder" element={<VisionBuilderGame />} />

          {/*  level 2*/}
          <Route path="/communication-lab" element={<CommunicationLab />} />
          <Route path="/empathy-radar" element={<EmpathyRadarGame />} />

          {/*  level 3*/}
          <Route path="/decision-room" element={<DecisionRoom />} />
          <Route path="/team-architect" element={<TeamArchitect />} />

          {/*  level 4*/}
          <Route path="/innovation-sprint" element={<InnovationSprint />} />
          <Route path="/integrity-quest" element={<IntegrityQuest />} />

          {/* Finish  Leadership Games 6-8*/}

          {/*  Entrepreneurship Notes*/}
          <Route
            path="/entrepreneurship/notes"
            element={<EntrepreneurshipNotes />}
          />
          {/* Entrepreneurship Games for 6th-8th */}
          <Route
            path="/entrepreneurship/games"
            element={<Entrepreneurship />}
          />
          {/* Level 1 */}
          <Route path="/innovation-explorer" element={<InnovationExplorer />} />
          <Route path="/ai-startup-builder" element={<AIStartupBuilder />} />
          {/*Level 2 */}
          <Route path="/ethics-and-impact" element={<EthicsAndImpact />} />
          <Route path="/pitch-champion" element={<PitchChampion />} />
          {/*Level 3 */}
          <Route
            path="/user-persona-detective"
            element={<UserPersonaDetective />}
          />
          <Route path="/mvp-test" element={<MVPTest />} />

          {/*  Environmental Notes*/}
          <Route path="/environmental/notes" element={<EnvironmentalNotes />} />
          {/* Environmental Games for 6th-8th */}
          <Route path="/environmental/games" element={<Environment />} />
          {/* Level 1 */}
          <Route path="/classify-it" element={<ClassifyIt />} />
          <Route path="/pick-zone" element={<PickZone />} />
          <Route path="/chain-reaction" element={<ChainReaction />} />
          {/* Level 2 */}
          <Route path="/green-budget" element={<GreenBudget />} />
          <Route path="/match-fallout" element={<MatchFallOut />} />
          <Route path="/climate-pledge" element={<ClimatePledge />} />
          {/* Level 3 */}
          <Route path="/cause-scanner" element={<CauseScanner />} />
          <Route path="/melt-down-tracker" element={<MeltDownTracker />} />
          <Route path="/dilemma-cards" element={<DilemmaCards />} />

          {/* Computer Notes*/}
          <Route path="/computer/notes" element={<ComputerNotes />} />
          <Route path="/computer/notes/module-1" element={<WhatIsAi />} />
          <Route path="/computer/notes/module-2" element={<WorkOfAi />} />
          <Route
            path="/computer/notes/module-3"
            element={<TypesAndUseOfAi />}
          />
          <Route path="/computer/notes/module-4" element={<WhatCantAiDo />} />
          <Route path="/computer/notes/module-5" element={<ImpAIWords />} />
          <Route path="/computer/notes/module-6" element={<BuildAi />} />
          <Route path="/computer/notes/module-7" element={<TestUrSkills />} />
          <Route path="/computer/notes/module-8" element={<ImportanceOfAi />} />

          {/* Games of Computers */}
          <Route path="/computer/games" element={<Computer />} />
          {/* Level 1 games of Computers */}
          <Route path="/AI-challenge" element={<AIChallengeGame />} />
          <Route path="/meet-ai-types" element={<MeetAITypeGame />} />
          <Route path="/build-a-bot" element={<BuildABotChallenge />} />
          {/* Level 2 games of Computers */}
          <Route path="/train-the-brain" element={<TrainTheBrainGame />} />
          <Route path="/smart-or-not" element={<SmartOrNotGame />} />
          <Route path="/ai-problem-solver" element={<AIProblemSolverGame />} />

          {/* Level 3 games of Computers */}
          <Route path="/ai-ethics-detective" element={<AIEthicsDetective />} />
          <Route path="/future-ai-architect" element={<FutureAIArchitect />} />
          <Route
            path="/ai-career-explorer"
            element={<AICareerExplorerGame />}
          />

          {/* Games of AI Class 9-10 */}
          {/* Level 1 */}
          <Route path="/spy-the-smart-tech" element={<SpyTheSmartTech />} />
          <Route path="/which-ai-does-what" element={<WhichAIDoesWhat />} />
          <Route path="/smart-city-game" element={<SmartCityGame />} />

          {/* Level 2 */}
          <Route path="/TrainAIModelGame" element={<TrainAIModelGame />} />
          <Route path="/AIOopsGame" element={<AIOopsGame />} />
          <Route
            path="/RateTheIntelligenceGame"
            element={<RateTheIntelligenceGame />}
          />

          {/* Level 3 */}
          <Route path="/justice-for-all" element={<JusticeForAll />} />
          <Route path="/design-a-bot" element={<DesignAbot />} />
          <Route path="/FutureMeInAI" element={<FutureMeInAI />} />
          <Route
            path="/ThinkBeforeYouTechGame"
            element={<ThinkBeforeYouTechGame />}
          />

          {/* Finish Games of AI Class 9-10 */}

          {/* Games of entrepreneurship Class 9-10 */}
          {/* Level 1 */}
          <Route path="/LeanMachineGame" element={<LeanMachineGame />} />
          <Route path="/PitchArenaGame" element={<PitchArenaGame />} />
          <Route path="/StartupQuest" element={<StartupQuest />} />

          {/* Level 2 */}
          <Route
            path="/EthicsEscapeRoomGame"
            element={<EthicsEscapeRoomGame />}
          />
          <Route
            path="/MarketPulseChallenge"
            element={<MarketPulseChallenge />}
          />
          <Route
            path="/StartupFinanceFunGame"
            element={<StartupFinanceFunGame />}
          />
          {/* Finish Games of entrepreneurship Class 9-10 */}

          {/* Games of Dig Mkting Class 9-10 */}
          {/* Level 1 */}

          <Route path="/brand-voice-result" element={<BrandVoiceResult />} />
          <Route path="/brand-voice" element={<BrandVoiceGame />} />
          <Route path="/carousel-campaign" element={<CarouselCampaign />} />
          <Route
            path="/digital-explorer-result"
            element={<DigitalExplorerResult />}
          />
          <Route path="/digital-explorer" element={<DigitalExplorer />} />

          {/* Level 2 */}
          <Route path="/reel-architect" element={<ReelArchitectGame />} />

          <Route
            path="/StoryboardSprintGame"
            element={<StoryboardSprintGame />}
          />

          <Route
            path="/BrandVoiceChallengeGame"
            element={<BrandVoiceChallenge />}
          />

          {/* Level 3 */}

          <Route path="/CampaignCaptainGame" element={<LevelController />} />

          {/* Finish Games of Dig Mkting Class 9-10 */}

          {/* 9-10 Finance games */}
          <Route path="/budget-boss-game" element={<BudgetBossGame />} />
          <Route path="/mini-market-master" element={<MiniMarketMaster />} />
          <Route path="/wealth-quest-game" element={<WealthQuestGame />} />
          {/* Finished 9-10 Finance games */}

          {/*Leadership Games for 9-10*/}
          {/* Level 1 */}
          <Route
            path="/leadership-identity-mixer"
            element={<LeadershipIdentityMixer />}
          />
          <Route
            path="/vision-blueprint-builder"
            element={<VisionBlueprintBuilder />}
          />
          {/* Level 2 */}
          <Route path="/conflict-simulator" element={<ConflictSimulator />} />
          <Route path="/eq-tracker" element={<EQTracker />} />
          {/*Level 3 */}
          <Route path="/ethical-logical-maze" element={<EthicalLogicMaze />} />
          <Route
            path="/team-architect-mission"
            element={<TeamArchitectMission />}
          />
          {/*Level 4 */}
          <Route
            path="/innovation-launchpad"
            element={<InnovationLaunchpad />}
          />
          <Route path="/bias-detective" element={<BiasDetective />} />

          {/*Games of SEL Class 9-10*/}
          {/* Level 1 */}
          <Route path="/emotion-decoder" element={<EmotionDecoder />} />
          <Route path="/respond-dont-react" element={<RespondDontReact />} />
          <Route path="/spot-the-strength" element={<SpotTheStrength />} />
          {/* Level 2 */}
          <Route
            path="/stress-response-builder"
            element={<StressResponseBuilder />}
          />
          <Route path="/conflict-choices" element={<ConflictChoices />} />
          <Route path="/body-signal-matchup" element={<BodySignalMatchup />} />
          {/*Level 3 */}
          <Route path="/smart-goal-lab" element={<SmartGoalLab />} />
          <Route
            path="/help-network-builder"
            element={<HelpNetworkBuilder />}
          />
          <Route path="/influence-journal" element={<InfluenceJournal />} />

          {/*11-12 Finance games */}
          <Route path="/fin-fest-game" element={<FinFestGame />} />
          <Route path="/stock-trader-game" element={<StockTraderGame />} />
          <Route path="/invest-quest-pro" element={<InvestoQuestPro />} />
          {/* 11-12 Finance games */}

          {/*11-12 DM games */}
          {/*Level 1 games */}
          <Route path="/ad-spotter-game" element={<AdSpotterGame />} />
          <Route
            path="/audience-match-up-game"
            element={<AudienceMatchUpGame />}
          />
          <Route
            path="/persona-builder-game"
            element={<PersonaBuilderGame />}
          />

          {/*Level 2  games */}
          <Route path="/caption-clinic-game" element={<CaptionClinicGame />} />
          <Route
            path="/platform-picker-game"
            element={<PlatformPickerGame />}
          />
          <Route
            path="/campaign-puzzle-game"
            element={<CampaignPuzzleGame />}
          />

          {/*Level 3 games */}
          <Route path="/boost-or-post-game" element={<BoostOrPostGame />} />
          <Route
            path="/campaign-builder-game"
            element={<CampaignBuilderGame />}
          />
          <Route path="/metric-match-up-game" element={<MetricMatchUpGame />} />

          {/*11-12 DM games finish*/}

          {/* Games of Communication Class 11-12 */}

          {/* Level 1 */}
          <Route path="/BodyLanguageGame" element={<BodyLanguageGame />} />

          <Route
            path="/ActiveListeningGame"
            element={<ActiveListeningGame />}
          />

          <Route path="/ToneSimulatorGame" element={<ToneSimulatorGame />} />

          {/* Level 2 */}
          <Route path="/PersuasionGame" element={<PersuadeWithPurpose />} />

          <Route path="/DigitalDilemmaGame" element={<DigitalDilemmaGame />} />

          <Route path="/ResolveItRight" element={<ResolveItRight />} />

          {/* Level 3 */}
          <Route path="/LeadershipGame" element={<LeadershipGame />} />

          <Route path="/PRCrisisGame" element={<PRCrisisGame />} />

          <Route path="/FeedbackLoop" element={<FeedbackLoop />} />

          {/* Finish Games of Communication Class 11-12 */}

          {/* 11-12 Entrepreneurship games start*/}

          <Route
            path="/ethics-firewall-game"
            element={<EthicsFirewallGame />}
          />
          <Route
            path="/startup-simulation-game"
            element={<StartupSimulationGame />}
          />
          <Route
            path="/problem-solution-game"
            element={<ProblemSolutionGame />}
          />
          <Route path="/PitchArenaPro" element={<PitchArenaPro />} />
          <Route
            path="/SimulatedMarketGame"
            element={<SimulatedMarketGame />}
          />
          <Route path="/SDGStartupQuest" element={<SDGStartupQuest />} />

          {/*11-12 Entrepreneurship games finish*/}

          {/* Games of Leadership Class 11-12 */}

          <Route path="/BrandYouSimulator" element={<BrandYouSimulator />} />
          <Route
            path="/StrategicFrameworkGame"
            element={<StrategicFrameworkGame />}
          />
          <Route path="/CommunicationGame" element={<CommunicationGame />} />
          <Route path="/EQGame" element={<EQGame />} />
          <Route path="/EthicsLabyrinth" element={<EthicsLabyrinth />} />
          <Route path="/TeamLeadershipGame" element={<TeamLeadershipGame />} />
          <Route path="/BiasDetectiveGame" element={<BiasDetectiveGame />} />
          <Route
            path="/InnovationLaunchpad-Game"
            element={<InnovationLaunchpadGame />}
          />

          {/* Finish Games of Leadership Class 11-12 */}

          {/* Games of SEL Class 11-12 */}
          <Route path="/ThoughtReframerDrag" element={<ThoughtReframer />} />

          <Route path="/BoundaryBuilder" element={<BoundaryBuilder />} />

          <Route path="/BurnoutBarometer" element={<BurnoutBarometer />} />
          <Route path="/FocusTracker" element={<FocusTracker />} />

          <Route path="/EthicalSimulator" element={<EthicalSimulator />} />

          <Route path="/LegacyBuilder" element={<LegacyBuilder />} />

          <Route path="/IdentityShifter" element={<IdentityShifter />} />
          {/* Finish Games of SEL Class 11-12 */}

          {/* Games of Computers Class 11-12 */}

          {/* level1 */}
          <Route
            path="/SocialMediaDetective"
            element={<SocialMediaDetective />}
          />
          <Route path="/SmartGPSChallenge" element={<SmartGPSChallenge />} />
          <Route
            path="/EvolutionLabSimulator"
            element={<EvolutionLabSimulator />}
          />
          <Route path="/ChessMasterTrainer" element={<ChessMasterTrainer />} />
          {/* level2 */}
          <Route
            path="/MedicalDiagnosisAssistant"
            element={<MedicalDiagnosisAssistant />}
          />
          <Route path="/SmartEmailGuardian" element={<SmartEmailGuardian />} />
          <Route path="/recommender" element={<NetflixRecommendationGame />} />
          <Route
            path="/AutonomousCarVision"
            element={<AutonomousCarVision />}
          />
          {/* level3 */}
          <Route
            path="/ChatbotBuilder"
            element={<CustomerServiceChatbotBuilder />}
          />

          <Route
            path="/SchoolSocialMediaManager"
            element={<SchoolSocialMediaManager />}
          />
          <Route path="/PersonalStudyBuddy" element={<PersonalStudyBuddy />} />

          {/* Finish Games of Computers Class 11-12 */}

          {/* Games of Enviroment Class 11-12 */}

          {/* level1 */}

          <Route path="/CarbonCycleVault" element={<CarbonCycleVault />} />
          <Route path="/NitrogenReactor" element={<NitrogenReactor />} />
          <Route path="/PhosphorusLockdown" element={<PhosphorusLockdown />} />
          <Route path="/WaterGridCrisis" element={<WaterGridCrisis />} />

          {/* level2 */}

          <Route
            path="/UrbanFloodFlashpoint"
            element={<UrbanFloodFlashpoint />}
          />

          <Route path="/DayZero" element={<DayZero />} />

          {/* level3 */}
          <Route path="/UreaAddiction" element={<UreaAddiction />} />
          <Route
            path="/PeakPhosphorusPanic"
            element={<PeakPhosphorusPanic />}
          />

          {/* Finish Games of Enviroment Class 11-12 */}

          {/* Games of Legal awareness Class 11-12 */}
          {/* level1 */}
          <Route path="/TortLawGame1" element={<TortLawGame1 />} />
          <Route path="/TortLawGame2" element={<TortLawGame2 />} />
          <Route path="/TortLawGame3" element={<TortLawGame3 />} />
          {/* level2 */}
          <Route path="/CrimeCivilGame" element={<CrimeCivilGame />} />

          {/* level3 */}
          <Route path="/LandmarkCasesGame" element={<LandmarkCasesGame />} />
          <Route
            path="/LandmarkCasesResult"
            element={<LandmarkCasesResult />}
          />
          <Route path="/LegalConceptsGame" element={<LegalConceptsGame />} />
          <Route
            path="/LegalConceptsResult"
            element={<LegalConceptsResult />}
          />

          {/* Finish Games of Legal awareness Class 11-12 */}

          {/* Games of Communication Class 9-10 */}

          {/* Level 1 */}
          <Route path="/DecodetheMessage" element={<DecodetheMessage />} />

          <Route path="/ListenerLensGame" element={<ListenerLensGame />} />

          <Route path="/WhatWentWrongGame" element={<WhatWentWrongGame />} />

          {/* Level 2 */}
          <Route path="/PitchPerfectGame" element={<PitchPerfectGame />} />

          <Route path="/DigitalDilemma" element={<DigitalDilemma />} />

          <Route path="/ToneTranslatorGame" element={<ToneTranslatorGame />} />

          {/* Level 3 */}
          <Route
            path="/ConflictCommanderGame"
            element={<ConflictCommanderGame />}
          />

          <Route path="/TheBigSpeech" element={<TheBigSpeech />} />

          <Route path="/InboxInsightGame" element={<InboxInsightGame />} />

          {/* Finish Games of Communication Class 9-10 */}

          {/* Games of Enviroment Class 9-10 */}
          {/* level1 */}
          <Route path="/CauseEffectGame" element={<CauseEffectGame />} />
          <Route path="/FeedbackLoopGame" element={<FeedbackLoopGame />} />

          {/* level2 */}
          <Route path="/MeasureCompareQuiz" element={<MeasureCompareQuiz />} />
          <Route
            path="/ExternalityDetectiveGame"
            element={<ExternalityDetectiveGame />}
          />
          {/* level3 */}
          <Route
            path="/SustainabilityGames1"
            element={<SustainabilityGames1 />}
          />
          <Route
            path="/SustainabilityGames2"
            element={<SustainabilityGames2 />}
          />

          {/* Finish Games of Enviroment Class 9-10*/}

          {/* Games of legal awareness Class 9-10 */}
          {/* level1 */}
          <Route path="/MatchTermsGame" element={<MatchTermsGame />} />
          <Route
            path="/match-terms-game-result"
            element={<MatchTermsGameResult />}
          />

          {/* level2 */}
          <Route path="/JusticeThroneGame" element={<JusticeThroneGame />} />
          {/* level3 */}
          <Route
            path="/LegalQuizQuestLevel3"
            element={<LegalQuizQuestLevel3 />}
          />

          {/* Finish Games of legal awareness Class 9-10*/}

          {/* Other Routes */}

          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/payment-required" element={<PaymentRequired />} />
          <Route path="/faq's" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introSeenAt = localStorage.getItem("introSeenAt");

    if (!introSeenAt) {
      // First visit ever
      setShowIntro(true);
    } else {
      const seenTime = new Date(parseInt(introSeenAt));
      const now = new Date();
      const hoursPassed = (now - seenTime) / (1000 * 60 * 60);

      if (hoursPassed >= INTRO_EXPIRY_HOURS) {
        // Time expired — show intro again
        setShowIntro(true);
      } else {
        setShowIntro(false);
      }
    }
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem("introSeenAt", Date.now().toString());
    setShowIntro(false);
  };

  return (
    <div className="w-full h-screen">
      {showIntro ? (
        <VideoAudioSyncIntro onIntroComplete={handleIntroComplete} />
      ) : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<AppContent />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
