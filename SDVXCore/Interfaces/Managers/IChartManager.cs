using SDVXCore.Types.Draw;

namespace SDVXCore.Interfaces.Managers
{
    public interface IChartManager
    {
        DrawResponse Draw(DrawRequest req);
    }
}
